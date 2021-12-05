import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    flex: 1;

    .duration {
        &-bar {
            position: relative;
            margin: 0 10px;
            height: 3px;
            background-color: var(--alpha-bg);
            cursor: pointer;
            border-radius: 4;
                
            &:hover {
                height: 6px;
                .duration-process::after {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }

        &-process {
            position: absolute;
            left: 0;
            height: 100%;
            width: 0%;
            background-color:var(--text-primary);
            border-radius: 20px;
            
            &::after {
                content: '';
                position: absolute;
                width: 16px;
                height: 16px;
                right: 0;
                bottom: 4px;
                transform: translate(50%, 50%);
                background-color:var(--text-primary);
                border-radius: 100%;
                opacity: 0;
                visibility: hidden;
            }
        }
    }
`;

const Slider = ({ onHandleMouseUp }, ref) => {

    const sliderBarElm = useRef();
    const sliderProcessElm = useRef();

    useImperativeHandle(ref, () => ({
        setWidth: (number) => {
            sliderProcessElm.current.style.width = `${number}%`;
        }
    }), [])

    useEffect(() => {
        let slider = sliderBarElm.current;
        let offsetLeft = slider.getBoundingClientRect().x;
        let offsetWidth = slider.offsetWidth;
        let isDown = false;
        let width;


        const handleWindowSizeChange = () => {
            offsetLeft = slider.getBoundingClientRect().x;
            offsetWidth = slider.offsetWidth;
        }
        

        const handleMouseDown = (e) => {
            width = Math.round((e.pageX - offsetLeft) * 100 / offsetWidth);
            sliderProcessElm.current.style.width = `${width}%`;
            isDown = true;
        }
        const handleMouseMove = (e) => {
            if (!isDown) return;
            width = Math.floor((e.pageX - offsetLeft) * 100 / offsetWidth);
            if (width > 100) width = 100;
            sliderProcessElm.current.style.width = `${width}%`;
        };
        const handleMouseUp = () => {
            isDown = false;
            if (width < 0) width = 0;
            onHandleMouseUp(width);
        }
        const handleMouseLeave = () => {
            if (!isDown) return;
            isDown = false;
            if (width < 1) width = 1;
            onHandleMouseUp(width);
        }

        window.addEventListener('resize', handleWindowSizeChange);
        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mousemove', handleMouseMove);
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
            slider.removeEventListener('mouseleave', handleMouseLeave);
            slider.removeEventListener('mouseup', handleMouseUp);
            slider.removeEventListener('mousedown', handleMouseDown);
            slider.removeEventListener('mousemove', handleMouseMove);
        }
    },[onHandleMouseUp]);

    return (
        <Div>
            <div ref={ sliderBarElm } className="duration-bar">
                <div ref={ sliderProcessElm } className="duration-process"></div>
            </div>
        </Div>
    )
};

export default forwardRef(Slider);