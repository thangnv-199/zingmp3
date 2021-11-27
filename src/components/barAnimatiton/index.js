import styled , { keyframes }from 'styled-components';

const pulse = keyframes`
    0% {
        height: 1px;
        margin-top: 0;
    }
    10% {
        height: 8px;
        margin-top: -8px;
    }
    50% {
        height: 4px;
        margin-top: -4px;
    }
    60% {
        height: 12px;
        margin-top: -12px;
    }
    80% {
        height: 16px;
        margin-top: -16px;
    }
    100% {
        height: 1px;
        margin-top: 0;
    }
`;

const BarStyle = styled.div`
    .playing {
        position: absolute;
        top: 50%;
        left: 50%;
        width: auto;
        transform: translateX(-50%) translateY(-15%);
    }
    .playing:after {
        content: "";
        display: block;
        width: 100%;
        margin-top: 10px;
    }
    .now.playing .bar {
        display: inline-block;
        position: relative;
        margin-right: 1px;
        width: 3px;
        height: 1px;
        overflow: hidden;
        background-color: #fff;
        color: transparent;
        animation-name: ${pulse};
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
    .n1 {
        animation-delay: 0.5s;
    }
    .n2 {
        animation-delay: 0.2s;
    }
    .n3 {
        animation-delay: 1.2s;
    }
    .n4 {
        animation-delay: 0.9s;
    }
    .n5 {
        animation-delay: 2.3s;
    }
`;


const Bar = () => {
    return (
        <BarStyle>
            <div className="now playing" id="music">
                <span className="bar n1">A</span>
                <span className="bar n2">B</span>
                <span className="bar n3">c</span>
                <span className="bar n4">D</span>
                <span className="bar n5">E</span>
            </div>
        </BarStyle>
    )
};

export default Bar;