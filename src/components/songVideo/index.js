import styled from "styled-components";
import { useRef, memo, useEffect } from 'react';

const Container = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    bottom: var(--control-height);
    background-color: var(--layout-bg);
    z-index: 10;
    transition: all 0.4s linear;
    overflow: hidden;
    padding: 0 30px;
    height: 0;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    position: relative;
`;

const Action = styled.div`
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
    height: calc(100% - var(--control-height));
`;


const SongVideo = ({ currentSong }) => {
    console.log('Song video render !!')

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

    useEffect(() => {
        // console.log(currentSong)
        // fetch(' http://api.mp3.zing.vn/api/mobile/video/getvideoinfo?keycode=fafd463e2131914934b73310aa34a23f&requestdata={"id":"ZWADA0OW"}')
        // .then(res => res.json())
        // .then (res => {
        //     console.log(res)
        // })
    }, [currentSong])

    return (
        <Container>
            <Header>
                <div className="flex items-center">
                    <img
                        className="h-10 w-10 rounded-full"
                        src={currentSong.image}
                        alt=""
                    />
                    <div className="ml-3">
                        <h2 className="text-lg font-bold capitalize">{currentSong.name}</h2>
                        {currentSong.singer.split(',').map((singer, index) => (
                            <a key={index} href="#!" className="text-secondary capitalize hover:text-purple">
                                { index === 0 ? '' : ',' } {singer} 
                            </a>
                        ))}
                    </div>
                </div>
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
                        <label htmlFor="song-video-checkbox" className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </label>
                    </button>
                </Action>
            </Header>
            <Body>
                <div className="flex h-full">
                    <div className="m-auto text-center">
                        <img
                            className="h-40 w-40 m-auto"
                            src="/zingmp3/images/icons/video-icon.09654360.svg"
                            alt=""
                        />
                        <p className="text-2xl font-bold">MV đang được cập nhật</p>
                    </div>
                </div>
                {/* <video 
                        preload="metadata"
                        controls
                        className="h-full m-auto px-5"
                        src="https://mcloud-bf-s7-mv-zmp3.zadn.vn/XHudt_GRZMU/38c6354c240dcd53941c/9b07fc6d032fea71b33e/480/Het-Thuong-Can-Nho.mp4?authen=exp=1638128754~acl=/XHudt_GRZMU/*~hmac=3fb0788663bf8028167bc41e32d6a5a9">
                    </video> */}
            </Body>
        </Container>
    )
}

export default memo(SongVideo);