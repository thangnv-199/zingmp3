import styled from "styled-components";
import { useRef, memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import HeartIcon from "../iconsButton/heart";
import useDispatchs from '../../hooks/useDispatchs';
import CORSwarning from '../warning/cors';
import * as api from '../../apis';

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    position: relative;
    padding: 0 20px;
`;

const ActionStyled = styled.div`
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
    }

    .compress-icon, .expand-icon {
        display: none;

        &.--active {
            display: block;
        }
    }
`;

const BodyStyled = styled.div`
    height: calc(100% - 80px);
    padding-bottom: 20px;
`;

const ButtonStyled = styled.button`
    border-radius: 100%;
    background-color: var(--alpha-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    
    &:hover {
        opacity: 0.8;
    }
`;

const SongVideo = () => {
    const { closeMvModal } = useDispatchs();
    const data = useSelector(state => state.modal.songVideo);
    const [isCheck, setIsCheck] = useState(0);
    const compressIconElm = useRef();
    const expandIconElm = useRef();
    const videoRef = useRef();

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
        if (data) {
            fetch(api.GET_SONG_MV(data?.id))
                .then(res => res.json())
                .then(res => {
                    if (res.source) {
                        setIsCheck(0)
                        videoRef.current.src = res.source['480'];
                    } else {
                        setIsCheck(1)
                    }
                })
                .catch((err) => {
                    console.log(err.text);
                    setIsCheck(2);
                })
        }
    }, [data])

    return (
        <div className="h-full flex flex-col container">
            <HeaderStyled>
                <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" src={data?.image} alt="" />
                    <div className="mx-3">
                        <h2 className="text-lg font-bold capitalize">{data?.name}</h2>
                        {data?.artist.split(',').map((artist, index) => (
                            <a key={index} href="#!" className="text-secondary capitalize hover:text-link-hover">
                                {index === 0 ? '' : ','} {artist}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <ButtonStyled>
                            <HeartIcon data={data}/>
                        </ButtonStyled>
                        {/* <ButtonStyled title="Thêm vào thư viện">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6" 
                                fill={ checkInLibrary ? 'var(--purple-primary)' : 'none' }
                                stroke={ checkInLibrary ? 'var(--purple-primary)' : 'currentColor' }
                                viewBox="0 0 24 24" 
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </ButtonStyled> */}
                        <ButtonStyled className="ml-3" title="Nghe audio">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                        </ButtonStyled>
                    </div>
                </div>
                <ActionStyled>
                    <button className="mr-5">
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
                    <button onClick={ closeMvModal }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </ActionStyled>
            </HeaderStyled>
            <BodyStyled className="flex-1">
                {isCheck === 0
                    ? <div className="bg-black h-full flex">
                        <video
                            ref={videoRef}
                            preload="metadata"
                            controls
                            autoPlay
                            className="w-full m-auto"
                            src="">
                        </video>
                    </div>
                    : isCheck === 1
                        ? <div className="flex h-full">
                            <div className="m-auto text-center">
                                <img
                                    className="h-40 w-40 m-auto"
                                    src="/zingmp3/images/icons/video-icon.09654360.svg"
                                    alt=""
                                />
                                <p className="text-2xl font-bold">Bài hát này chưa có MV</p>
                            </div>
                        </div>
                        : <CORSwarning />
                }
            </BodyStyled>
        </div>
    )
}

export default memo(SongVideo);