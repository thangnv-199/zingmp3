import styled from "styled-components";
import { useRef, memo } from 'react';

const Container = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    bottom: var(--control-height);
    background-color: var(--layout-bg);
    z-index: 10;
    transition: all 0.4s linear;
    overflow: hidden;
    height: 0;
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
    padding: 8px 50px;
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
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: calc(100% - var(--control-height));
    padding: 40px;
`;

const Lyric = styled.div`
    overflow-y: auto;
    margin-left: 100px;
    p {
        line-height: 60px;
        font-weight: bold;
        font-size: 30px;
        height: 100%;
    }
`;

const SongLyric = ({ currentSong }) => {
    console.log('Song lyric render !!')

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
                    <button>
                        <label htmlFor="song-lyric-checkbox" className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </label>
                    </button>
                </Action>
            </Header>
            <Body>
                <div className="flex flex-col flex-shrink-0 text-center text-xl font-bold">
                    <img 
                        className="flex-shrink-0 mb-5" 
                        src={currentSong.image}
                        alt="" 
                    />
                    <p className="mb-5">Bài hát : {currentSong.name}</p>
                    <p className="text-capitalize">Ca sĩ : {currentSong.singer}</p>
                </div>
                <Lyric className="scrollbar">
                    
                    { currentSong.lyric 
                        ? <ul>{currentSong.lyric.split('\n').map((line, index) => {
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
                                <p>Lời bài hát đang được cập nhập</p>
                            </div>
                        </div>
                    }
                </Lyric>
            </Body>
        </Container>
    )
}

export default memo(SongLyric);