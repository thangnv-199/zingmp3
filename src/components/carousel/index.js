import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

import createSlider from "../../utils/slider";
import '../../css/slider.css';

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
    align-items: center;

    .nvt-arrow {
        cursor: pointer;
        padding: 8px 12px;
        
        &.--disabled {
            opacity 0.5;
            pointer-events: none;
        }
        &:hover {
            opacity: 0.8;
        }
    }
    ${props => props.style === 2 ? `
    .nvt-arrow {
        position: absolute;
        z-index: 100;
        background-color: #fff;
        color: #ccc;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        bottom: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

        &.--disabled {
            display: none;
        }
    }
    .arrow-prev {
        left: 0;
        transform: translateX(-33%);
    }
    .arrow-next {
        right: 0;
        transform: translateX(33%);
    }
    
    @media (max-width: 767px) {
        .nvt-arrow {
            width: 30px !important;
            height: 30px !important;
        }
    }
    ` : ''}
`;

const Carousel = ({ children, to, title, subTitle,
    col, col_sm, col_md, col_lg,
    headerStyle, thumbnail, arrowStyle = 1,
}) => {

    const sliderRef = useRef();
    const arrowsRef = useRef();

    useEffect(() => {

        const slider = createSlider(sliderRef.current, {
            infinite: false,
            slidesToShow: col,
            slidesToScroll: col,
            appendArrows: arrowsRef.current,
            prevArrow: ` <i class="fas fa-chevron-left"></i>`,
            nextArrow: `<i class="fas fa-chevron-right"></i>`,
            arrows: col < children.length,
            draggable: false,
            responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: col_lg || col,
                    slidesToScroll: col_lg || col,
                    arrows: (col_lg || col) < children.length,
                }
            },{
                breakpoint: 1023,
                settings: {
                    slidesToShow: col_md || col_lg || col,
                    slidesToScroll: col_md || col_lg || col,
                    arrows: (col_md || col_lg || col) < children.length,
                }
            },{
                breakpoint: 767,
                settings: {
                    slidesToShow: col_sm || col_md || col_lg || col,
                    slidesToScroll: col_sm || col_md || col_lg || col,
                    arrows: (col_sm || col_md || col_lg || col) < children.length,
                }
            },]
        })
    })

    return (
        <div className="relative">
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
                <ButtonGroupStyled ref={arrowsRef} style={arrowStyle}>

                </ButtonGroupStyled>
            </div>
            <div ref={sliderRef}>
                {children}
            </div>
            
        </div>
    )
}

export default Carousel