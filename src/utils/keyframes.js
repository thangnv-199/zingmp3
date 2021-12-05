import { keyframes } from "styled-components";

export const slideInToRight = keyframes`
    from {
        transform: translateX(100%)
    }
    to {
        transform: translateX(0)
    } 
`;

export const slideOutToRight = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    } 
    to {
        transform: translateX(100%);
        opacity: 0;
    }
`;

export const slideInBottom = keyframes`
    from {
        transform: translateY(100%);
    } 
    to {
        transform: translateY(0);
    }
`;

export const slideOutBottom = keyframes`
    from {
        transform: translateY(0);
    } 
    to {
        transform: translateY(100%);
    }
`;