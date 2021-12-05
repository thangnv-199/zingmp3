import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

const Body = styled.div`
    margin-bottom: 30px;
    display:flex;
    overflow-x: auto;
    padding-bottom: 10px;
    margin: 0 -15px 30px; 
    flex-wrap: ${props => props.wrap ? 'wrap' : 'no-wrap'};

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
            width: ${props => 100 / (props.col_sm || props.col_md)}%;
            flex: 0 0 ${props => 100 / (props.col_sm || props.col_md)}%;
        }
    }
`;

const HeaderStyle3 = styled.div`
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

const Carousel = ({ children, to, title, subTitle,
    col, col_sm, col_md, col_lg, wrap,
    headerStyle, thumbnail 
}) => {
    const sliderRef = useRef();

    useEffect(() => {
        draggbleAxisX(sliderRef.current);
    }, []);

    const draggbleAxisX = (element) => {
        let isDown = false;
        let startX;
        let scrollLeft;
        let move;

        element.addEventListener('mousedown', (e) => {
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
            <div>
                { headerStyle === 1 
                    ? <h2 className="text-xl font-bold mb-4 text-white capitalize">{ title }</h2>
                    : ''  
                }
                { headerStyle === 2 
                    ? <div className="flex mb-4 items-center hover:text-link-hover text-white">
                        <NavLink to={to} className="text-xl font-bold mr-1" >{title}</NavLink>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    : ''  
                }
                { headerStyle === 3 
                    ? <HeaderStyle3>
                        <a href="#!" className="overflow-hidden rounded">
                            <img src={thumbnail} alt="" />
                        </a>
                        <div className="ml-3">
                            <p className="caption">{title}</p>
                            <a href="#!" className="heading">{subTitle}</a>
                        </div>
                    </HeaderStyle3>
                    : ''  
                }
            </div>
            <Body 
                wrap={wrap ? 'true' : ''}
                ref={ sliderRef }
                className="scrollbar" 
                col={col} col_sm={col_sm} col_md={col_md} col_lg={col_lg}
            >
                { children }
            </Body>
        </div>
    )
}

export default Carousel