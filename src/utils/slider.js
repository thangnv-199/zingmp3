function createSlider(slider, options) {
    class Slider {
        constructor(slider, options) {
            this.optionsDefault = {
                resize: false,
                infinite: false,
                dots: false,
                dotsColor: null,
                dotsClass: null,
                dotClass: null,
                arrows: true,
                arrowsColor: null,
                prevArrowClass: null,
                nextArrowClass: null,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 10000,
                draggable: true,
                pauseOnHover: false,
                prevArrow: 'prev',
                nextArrow: 'next',
                initialSlide: 0,
                fade: false,
                fadeSpeed: 400,
                callback: null,
                appendDots: null,
                appendArrows: null,
                responsive: null,
                ...options,
            };

            const {
                responsive,
                ...initialOptions
            } = this.optionsDefault;

            this.initialOptions = initialOptions;
            this.options = initialOptions;
            this.checkOptions();
            this.responsive = responsive;

            this.slider = slider;
            this.sliderTrack = null;
            this.sliderList = null;
            this.sliderItems = null;
            this.itemWidth = null;
            this.sliderLinks = null;
            this.nav = null;
            this.dotsGroup = null;
            this.dotItems = null;
            this.prevArrow = null;
            this.nextArrow = null;
            this.length = null;
            this.currentIndex = this.options.initialSlide;
            this.isSliderDraggable = false;
            this.move = null;
            this.sliderLinks = this.slider.querySelectorAll('a');
            this.auto = null;
            this.scrollDefaults = 0;

            this.checkResponsive();
            this.init();
            this.start();
            // this.windowEvents();
        }

        //private
        checkOptions() {
            if (this.options.autoplay) {
                this.options.infinite = true;
            }
            if (this.options.slidesToScroll > this.options.slidesToShow) {
                this.options.slidesToScroll = this.options.slidesToShow
            }
        }

        init() {
            this.slider.classList.add('nvt-slider');
            this.sliderItems = [...this.slider.children];
            this.slider.innerHTML = '';

            this.sliderTrack = document.createElement('div');
            this.sliderTrack.className = 'nvt-track';

            this.sliderList = document.createElement('div');
            this.sliderList.className = 'nvt-list';

            this.nav = document.createElement('nav');
            this.nav.className = 'nvt-nav';

            for (let i = 0; i < this.sliderItems.length; i++) {
                this.sliderItems[i].classList.add('nvt-item');
                this.sliderItems[i].style = `
                    flex: 0 0 ${100 / this.options.slidesToShow}%;
                    width: ${100 / this.options.slidesToShow}%;
                `;
                this.sliderList.appendChild(this.sliderItems[i]);
            };
            

            this.sliderTrack.appendChild(this.sliderList);
            this.slider.appendChild(this.sliderTrack);
            this.slider.appendChild(this.nav);

            this.length = Math.ceil((this.sliderItems.length - this.options.slidesToShow) / this.options.slidesToScroll) + 1;
            
            this.sliderTrack.scrollLeft = this.move * this.currentIndex;
            this.itemWidth = this.sliderItems[0].offsetWidth;
            this.move = this.itemWidth * this.options.slidesToScroll;
            
            if (this.options.infinite) {
                this.cloneItems();
                this.scrollDefaults = this.itemWidth * this.options.slidesToShow;
                this.sliderTrack.scrollLeft += this.scrollDefaults;
                this.length = Math.ceil(this.sliderItems.length / this.options.slidesToScroll);
            }

            this.currentIndex > this.length && (this.currentIndex = this.length);
        }

        cloneItems() {
            console.log(this.sliderItems)
            for (let i = 0; i < this.options.slidesToShow; i++) {
                const itemClone = this.sliderItems[i].cloneNode(true);
                itemClone.classList.add('item-clone');
                this.sliderList.appendChild(itemClone);

                const itemClone2 = this.sliderItems[this.sliderItems.length - 1 - i].cloneNode(true);
                itemClone2.classList.add('item-clone');
                this.sliderList.prepend(itemClone2);
            }
        }

        resize() {
            let timeout;
            window.addEventListener('resize', () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    if (!this.checkResponsive()) {
                        this.options = this.initialOptions;
                    };
                    this.reset();
                }, 1000);
            });
        }

        dots() {
            this.dotsGroup = document.createElement('div');
            this.dotsGroup.className = 'nvt-dots';
            this.options.dotsClass && this.dotsGroup.classList.add(...this.options.dotsClass.trim().replace(/\s+/g, " ").split(' '));
            this.dotItems = [];

            for (let i = 0; i < this.length; i++) {
                const dot = document.createElement('div');
                dot.className = 'nvt-dot';
                this.options.dotsColor && (dot.style = `color: ${this.options.dotsColor}`);
                this.options.dotClass && dot.classList.add(...this.options.dotClass.trim().replace(/\s+/g, " ").split(' '));
                this.dotItems.push(dot);
                this.dotsGroup.appendChild(dot);

                dot.addEventListener('click', () => {
                    this.currentIndex = i;
                    this.scrollX();

                })
            }

            this.dotItems[this.currentIndex].classList.add('--active');
            if (!this.options.arrows) {
                if (this.options.appendDots) {
                    this.options.appendDots.appendChild(this.dotsGroup)
                } else {
                    this.nav.appendChild(this.dotsGroup)
                }
            }
        }

        arrows() {
            this.prevArrow = document.createElement('button');
            this.prevArrow.className = 'nvt-arrow arrow-prev';
            !this.options.infinite && this.currentIndex === 0 && this.prevArrow.classList.add('--disabled');
            this.options.prevArrowClass && this.prevArrow.classList.add(...this.options.prevArrowClass.trim().replace(/\s+/g, " ").split(' '));
            this.prevArrow.innerHTML = this.options.prevArrow;
            this.options.arrowsColor && (this.prevArrow.style = `color: ${this.options.arrowsColor}`)
            this.prevArrow.addEventListener('click', () => this.handlePrev())

            this.nextArrow = document.createElement('button');
            this.nextArrow.className = 'nvt-arrow arrow-next';
            !this.options.infinite && this.currentIndex === this.length - 1 && this.nextArrow.classList.add('--disabled');
            this.options.nextArrowClass && this.nextArrow.classList.add(...this.options.nextArrowClass.trim().replace(/\s+/g, " ").split(' '));
            this.nextArrow.innerHTML = this.options.nextArrow;
            this.options.arrowsColor && (this.nextArrow.style = `color: ${this.options.arrowsColor}`)
            this.nextArrow.addEventListener('click', () => this.handleNext())

            this.options.appendArrows ?
                this.options.appendArrows.appendChild(this.prevArrow) :
                this.nav.appendChild(this.prevArrow);

            if (this.options.dots) {
                if (this.options.appendDots) {
                    this.options.appendDots.appendChild(this.dotsGroup)
                } else {
                    this.nav.appendChild(this.dotsGroup)
                }
            }
            this.options.appendArrows ?
                this.options.appendArrows.appendChild(this.nextArrow) :
                this.nav.appendChild(this.nextArrow);
        }

        handlePrev() {
            this.currentIndex--;
            this.scrollX();
        }

        handleNext() {
            this.currentIndex++;
            this.scrollX();
        }

        handleDot(index) {
            if (!this.options.dots) return;
            this.dotsGroup.querySelector('.nvt-dot.--active').classList.remove('--active');
            this.dotItems[index].classList.add('--active');
        }

        handleArrow() {
            if (!this.options.arrows || this.options.infinite) return;

            if (this.currentIndex === this.length - 1) {
                this.nextArrow.classList.add('--disabled')
                this.prevArrow.classList.remove('--disabled')
            } else if (this.currentIndex === 0) {
                this.prevArrow.classList.add('--disabled')
                this.nextArrow.classList.remove('--disabled')
            } else {
                this.prevArrow.classList.remove('--disabled')
                this.nextArrow.classList.remove('--disabled')
            }
        }

        scrollX() {
            if (this.currentIndex === this.length && this.options.infinite) {
                this.sliderTrack.scroll({
                    left: this.move * this.currentIndex + this.scrollDefaults,
                    behavior: this.options.fade ? 'auto' : 'smooth',
                });
                this.currentIndex = 0;
                setTimeout(() => {
                    this.sliderTrack.scrollLeft = this.scrollDefaults;
                }, 1000)
            } else if (this.currentIndex < 0) {
                this.sliderTrack.scroll({
                    left: this.scrollDefaults - (this.itemWidth * this.options.slidesToScroll),
                    behavior: this.options.fade ? 'auto' : 'smooth',
                });
                setTimeout(() => {
                    this.sliderTrack.scrollLeft = this.move * this.length + (this.scrollDefaults - (this.itemWidth * this.options.slidesToScroll));
                }, 1000)
                this.currentIndex = this.length - 1;
            } else {
                this.sliderTrack.scroll({
                    left: this.move * this.currentIndex + this.scrollDefaults,
                    behavior: this.options.fade ? 'auto' : 'smooth',
                });
            }

            this.handleDot(this.currentIndex);
            this.handleArrow();
            this.options.fade && this.fade();
            this.options.callback && this.options.callback();
        }

        autoplay() {
            this.pause();
            this.play();
        }

        pauseOnHover() {
            this.slider.addEventListener('mouseenter', () => {
                this.options.autoplay && this.pause();
            });
            this.slider.addEventListener('mouseleave', () => {
                this.options.autoplay && this.autoplay();
            })
        }

        draggable() {
            const checkMobileAndTablet = this.checkMobileAndTablet();
            const event = {
                down: checkMobileAndTablet ? 'touchstart' : 'mousedown',
                up: checkMobileAndTablet ? 'touchend' : 'mouseup',
                move: checkMobileAndTablet ? 'touchmove' : 'mousemove',
            }

            let isDown = false;
            let startX;
            let scrollLeft;
            let move;

            const handleMouseDown = (e) => {
                isDown = true;
                const pageX = checkMobileAndTablet ? e.targetTouches[0].pageX : e.pageX
                startX = pageX - this.sliderTrack.offsetLeft;
                scrollLeft = this.sliderTrack.scrollLeft;
            }

            const handleMouseUp = () => {
                isDown = false;
                setTimeout(() => this.isSliderDraggable = false, 200);
                if (!move) return;

                if (move < -1 * this.move / 10) {
                    if ((this.currentIndex !== this.length && this.options.infinite) ||
                        this.currentIndex !== this.length - 1
                    ) {
                        this.currentIndex++;
                    }
                } else if (move > this.move / 10) {
                    if ((this.currentIndex === 0 && this.options.infinite) ||
                        this.currentIndex !== 0
                    ) {
                        this.currentIndex--;
                    }
                }
                this.scrollX();
                move = null;
            }

            const handleMouseMove = (e) => {
                if (!isDown) return;
                e.preventDefault();
                const pageX = checkMobileAndTablet ? e.targetTouches[0].pageX : e.pageX
                const x = pageX - this.sliderTrack.offsetLeft;
                move = x - startX;
                if (move > 10 || move < -10) this.isSliderDraggable = true;
                if (this.options.fade) return;
                this.sliderTrack.scrollLeft = scrollLeft - move;
            }

            this.sliderTrack.addEventListener(event.down, handleMouseDown);
            this.sliderTrack.addEventListener('mouseleave', handleMouseUp);
            this.sliderTrack.addEventListener(event.up, handleMouseUp);
            this.sliderTrack.addEventListener(event.move, handleMouseMove);

            this.sliderLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    this.isSliderDraggable && e.preventDefault();
                })
            })
        }

        fade() {
            this.sliderTrack.animate([{
                    opacity: 0.4,
                    visibility: 'hidden'
                },
                {
                    opacity: 1,
                    visibility: 'visible'
                },
            ], {
                duration: this.options.fadeSpeed,
            })
        }

        checkResponsive() {
            if (!this.responsive) return false;

            this.responsive.sort((a, b) => a.breakpoint - b.breakpoint);

            for (let i = 0; i < this.responsive.length; i++) {
                if (window.innerWidth < this.responsive[i].breakpoint) {
                    this.options = {
                        ...this.options,
                        ...this.responsive[i].settings,
                    }
                    return true;
                }
            }
            return false;
        }

        checkMobileAndTablet() {
            let check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }

        reset() {
            this.slider.innerHTML = '';
            for (let i = 0; i < this.sliderItems.length; i++) {
                this.slider.appendChild(this.sliderItems[i]);
            }

            this.checkOptions();
            this.sliderTrack = null;
            this.sliderList = null;
            this.sliderItems = null;
            this.sliderLinks = null;
            this.nav = null;
            this.dotsGroup = null;
            this.dotItems = null;
            this.prevArrow = null;
            this.nextArrow = null;
            this.length = null;
            this.isSliderDraggable = false;
            this.move = null;
            this.sliderLinks = this.slider.querySelectorAll('a');
            // this.auto = null;
            this.scrollDefaults = 0;

            !this.options.autoplay && this.pause();
            this.options.appendArrows && (this.options.appendArrows.innerHTML = '');
            this.options.appendDots && (this.options.appendDots.innerHTML = '');

            this.init();
            this.currentIndex > this.length - 1 && (this.currentIndex = this.length - 1);
            this.start();
            this.sliderTrack.scrollLeft = this.move * this.currentIndex + this.scrollDefaults;
        }

        start() {
            this.options.dots && this.dots();
            this.options.arrows && this.arrows();
            this.options.draggable && this.draggable();
            this.options.autoplay && this.autoplay();
            this.options.pauseOnHover && this.pauseOnHover();
            this.options.fade && this.fade();
            this.options.resize && this.resize();
        }

        // public Method
        currentSlide() {
            return this.currentIndex;
        }

        goTo(index) {
            if (!index) return;
            index < 0 && (index = 0);
            index > this.length - 1 && (index = this.length - 1);
            this.currentIndex = index;
            this.scrollX();
        }

        prev() {
            this.handlePrev();
        }

        next() {
            this.handleNext();
        }

        play(duration) {
            this.auto = setInterval(() => this.handleNext(), duration || this.options.autoplaySpeed);
        }

        pause() {
            clearInterval(this.auto);
        }

        getOption(key) {
            return this.options[key];
        }

        setOption(option) {
            this.options = {
                ...this.options,
                ...option,
            }
            this.reset();
        }
    }

    const mySlider = new Slider(slider, options);

    return {
        goTo: index => mySlider.goTo(index),
        currentSlide: () => mySlider.currentSlide(),
        next: () => mySlider.next(),
        prev: () => mySlider.prev(),
        play: duration => mySlider.play(duration),
        pause: () => mySlider.pause(),
        setOption: option => mySlider.setOption(option),
        getOption: key => mySlider.getOption(key),
    };
};


export default createSlider;