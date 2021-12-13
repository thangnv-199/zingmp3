import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

const SliderStyled = styled.div`
    overflow: hidden;
    user-select: none;
`;

const SliderTrackStyled = styled.div`
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const SliderListStyled = styled.div`
    display:flex;
    margin: 0 0 30px; 
    transition: all 0.4s linear;
    & > * {
        padding: 0 15px;
        width: ${props => 100 / props.col}%;
        flex: 0 0 ${props => 100 / props.col}%;

        @media (max-width: 1200px) {
            width: ${props => 100 / (props.col_lg || props.col)}%;
            flex: 0 0 ${props => 100 / (props.col_lg || props.col)}%;
        }

        @media (max-width: 1023px) {
            width: ${props => 100 / (props.col_md || props.col_lg)}%;
            flex: 0 0 ${props => 100 / (props.col_md || props.col_lg)}%;
        }

        @media (max-width: 767px) {
            padding: 0 10px;
            width: ${props => 100 / (props.col_sm || props.col_md)}%;
            flex: 0 0 ${props => 100 / (props.col_sm || props.col_md)}%;
        }
    }
`;

const HeaderStyle3Styled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    img {
        width: 50px;
        height: 50px;
        object-fit: contain;
        border-radius: 4px;
        transition: transform 0.25s linear;
        &:hover {
            transform: scale(1.1);
        }
    }
    .caption {
        color: var(--text-secondary);
        font-size: 14px;
        text-transform: uppercase;
    }
    .heading {
        color: var(--text-primary);
        font-size: 18px;
        font-weight: bold;
        text-transform: capitalize;
        &:hover {
            color: var(--link-text-hover);
        }
    }
`;

const ButtonGroupStyled = styled.div`
    display: flex;

    & > * {
        cursor: pointer;
        padding: 4px;
        &.--disabled {
            opacity 0.5;
            pointer-events: none;
        }
        &:hover {
            opacity: 0.8;
        }
    }
`;

const Carousel = ({ children, to, title, subTitle,
    col, col_sm, col_md, col_lg,
    headerStyle, thumbnail
}) => {

    const sliderRef = useRef();
    const prevBtnRef = useRef();
    const nextBtnRef = useRef();
    let sliderLength = useRef();
    let currentIndex = 0;

    switch (true) {
        case window.innerWidth < 767:
            sliderLength.current = col_sm;
            break;

        case window.innerWidth < 1023:
            sliderLength.current = col_md;
            break;

        case window.innerWidth < 1200:
            sliderLength.current = col_lg;
            break;

        default:
            sliderLength.current = col;
    }

    useEffect(() => {
        children.length > sliderLength.current && draggbleAxisX(sliderRef.current);
    }, [])

    useEffect(() => {
        const setSliderLeng = () => {
            switch (true) {
                case window.innerWidth < 767:
                    sliderLength.current = col_sm;
                    break;
        
                case window.innerWidth < 1023:
                    sliderLength.current = col_md;
                    break;
        
                case window.innerWidth < 1200:
                    sliderLength.current = col_lg;
                    break;
        
                default:
                    sliderLength.current = col;
            }
        }
        window.addEventListener('resize', setSliderLeng)

        return () => {
            window.removeEventListener('resize', setSliderLeng)
        }
    }, [col, col_sm, col_md, col_lg])

    const handlePrev = () => {
        currentIndex -= sliderLength.current
        scrollX(currentIndex);
    }

    const handleNext = () => {
        currentIndex += sliderLength.current
        scrollX(currentIndex);
    }

    const scrollX = (index) => {
        const x = sliderRef.current.offsetWidth / sliderLength.current * index;
        sliderRef.current.scroll({
            left: x,
            behavior: 'smooth'
        })
        checkIndex(index);
    }

    const checkIndex = (index) => {
        switch (true) {
            case index <= 0 :
                index = 0;
                prevBtnRef.current.classList.add('--disabled');
                nextBtnRef.current.classList.remove('--disabled');
                break;
            case index >= children.length - sliderLength.current :
                index = children.length - sliderLength.current;
                prevBtnRef.current.classList.remove('--disabled');
                nextBtnRef.current.classList.add('--disabled');
                break;
            default :
                prevBtnRef.current.classList.remove('--disabled');
                nextBtnRef.current.classList.remove('--disabled');
        }
    }

    const draggbleAxisX = (element) => {
        let isDown = false;
        let startX;
        let scrollLeft;
        let move;

        element.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDown = true;
            startX = e.pageX - element.offsetLeft;
            scrollLeft = element.scrollLeft;
        });

        element.addEventListener('mouseleave', () => {
            isDown = false;
            // setTimeout(() => isSliderDraggable = false, 200)
        });

        element.addEventListener('mouseup', () => {
            isDown = false;
            // setTimeout(() => isSliderDraggable = false, 200);
            const dkm = 100 / sliderLength.current;
            const dcm = -1 * move * 100 / sliderRef.current.offsetWidth;
            currentIndex += Math.round(dcm / dkm);
            scrollX(currentIndex)
        });

        element.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - element.offsetLeft;
            move = x - startX;
            // if (move > 10 || move < -10) isSliderDraggable = true;
            element.scrollLeft = scrollLeft - move;
        });
    }

    return (
        <div>
            <div className="flex justify-between align-center mb-3">
                <div>
                    {headerStyle === 1
                        ? <h2 className="text-xl font-bold text-white capitalize">{title}</h2>
                        : ''
                    }
                    {headerStyle === 2
                        ? <div className="flex items-center hover:text-link-hover text-white">
                            <NavLink to={to} className="text-xl font-bold mr-1" >{title}</NavLink>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        : ''
                    }
                    {headerStyle === 3
                        ? <HeaderStyle3Styled>
                            <a href="#!" className="overflow-hidden rounded">
                                <img src={thumbnail} alt="" />
                            </a>
                            <div className="ml-3">
                                <p className="caption">{title}</p>
                                <a href="#!" className="heading">{subTitle}</a>
                            </div>
                        </HeaderStyle3Styled>
                        : ''
                    }
                </div>
                {children.length > sliderLength.current && <ButtonGroupStyled className="flex">
                    <div onClick={handlePrev} ref={prevBtnRef} className="--disabled">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div onClick={handleNext} ref={nextBtnRef}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </ButtonGroupStyled>
                }
            </div>
            <SliderStyled>
                <SliderTrackStyled ref={sliderRef}>
                    <SliderListStyled
                        col={col} col_sm={col_sm} col_md={col_md} col_lg={col_lg}
                    >
                        {children}
                    </SliderListStyled>
                </SliderTrackStyled>
            </SliderStyled>
        </div>
    )
}

export default Carousel