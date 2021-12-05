import styled from "styled-components";
import { useRef, memo } from 'react';
import { useSelector } from 'react-redux';

import useDispatchs from '../../hooks/useDispatchs';


const Container = styled.div`
    height: calc(100% - var(--control-height) - 80px);

`;
const Header = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    align-items: center;
    position: relative;
`;

const Nav = styled.nav`
    display: flex;
    background-color: var(--alpha-bg);
    border-radius: 20px;
    padding: 4px;
`;

const Button = styled.button`
    padding: 8px 40px;
    font-weight: bold;
    color: var(--text-secondary);
    border-radius: 20px;
    

    &.--active {
        color: var(--text-primary);
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const Action = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;

    button {
        width: 44px;
        height: 44px;
        border-radius: 100%;
        background-color: var(--alpha-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    }

    .compress-icon, .expand-icon {
        display: none;

        &.--active {
            display: block;
        }
    }
`;

const Body = styled.div`
    display: flex;
    gap: 20px;
    height: 100%;
    padding: 40px;

    @media (max-width: 1023px) {
        flex-direction: column;
    }
`;

const Lyric = styled.div`
    overflow-y: auto;
    flex: 1;
    p {
        line-height: 60px;
        font-weight: bold;
        font-size: 30px;
        height: 100%;
    }
`;

const SongInfo = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;
    @media (max-width: 1023px) {
        flex-direction: row;
    }
`

const Thumbnail = styled.img`
    width: 100%;
    @media (max-width: 1023px) {
        width: 60px;
        height: 60px;
        border-radius: 100%;
    }
`

const Info = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    @media (max-width: 1023px) {
        font-size: 16px;
        text-align: left;
    }
`

const SongLyric = () => {
    console.log('Song lyric render !!');

    const { closeLyricModal } = useDispatchs();
    const data = useSelector(state => state.modal.songLyric);
    const compressIconElm = useRef();
    const expandIconElm = useRef();

    const handleFullscreen = () => {
        document.body.requestFullscreen();
        compressIconElm.current.classList.toggle('--active');
        expandIconElm.current.classList.toggle('--active');
    }

    const handleExitFullscreen = () => {
        document.exitFullscreen();
        compressIconElm.current.classList.toggle('--active');
        expandIconElm.current.classList.toggle('--active');
    }

    return (
        <Container>
            <Header>
                <Nav>
                    <Button>Danh sách phát</Button>
                    <Button>Karaoke</Button>
                    <Button className="--active">Lời bài hát</Button>
                </Nav>
                <Action>
                    <button>
                        <i
                            onClick={handleExitFullscreen}
                            ref={compressIconElm}
                            className="fas fa-compress-arrows-alt compress-icon"
                        />
                        <svg
                            ref={expandIconElm}
                            onClick={handleFullscreen}
                            className="h-6 w-6 expand-icon --active"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                    </button>
                    <button onClick={ closeLyricModal }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </Action>
            </Header>
            <Body>
                <SongInfo>
                    <Thumbnail src={data?.image} alt="" />
                    <Info>
                        <p>Bài hát : <span className="text-capitalize">{data?.name}</span></p>
                        <p className="text-capitalize">Ca sĩ : {data?.artist}</p>
                    </Info>
                </SongInfo>
                <Lyric className="scrollbar">

                    {data?.lyric
                        ? <ul>{data?.lyric.split('\n').map((line, index) => {
                            return <li key={index}>
                                <p>{line}</p>
                            </li>
                        })}</ul>
                        : <div className="flex h-full">
                            <div className="m-auto text-center">
                                <img
                                    className="h-30 w-30 m-auto"
                                    src="/zingmp3/images/icons/artist-icon.0b64fd14.svg"
                                    alt=""
                                />
                                <p>Chức năng này đang được cập nhập</p>
                            </div>
                        </div>
                    }
                </Lyric>
            </Body>
        </Container>
    )
}

export default memo(SongLyric);