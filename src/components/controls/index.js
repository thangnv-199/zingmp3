import styled from 'styled-components';
import { useRef, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import useDispatchs from '../../hooks/useDispatchs';
import { convertDuration } from '../../utils';
import Slider from './slider';
import RepeatButton from '../iconsButton/repeat';
import VolumeButton from '../iconsButton/volume';
import PlayButton from '../iconsButton/play';
import TogglePlayerQueueButton from '../iconsButton/togglePlayer';
import MvButton from '../iconsButton/mv';
import LyricButton from '../iconsButton/lyric';
import RandomButton from '../iconsButton/random';
import HeartButton from '../iconsButton/heart';
import storage from '../../utils/storage';
import * as api from '../../apis/index';

const ContainerStyled = styled.div`
    background-color: var(--control-bg);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    display: grid;
    grid-template-columns: 3fr 4fr 3fr;
    padding: 0 20px;
    color: var(--text-primary);
    z-index: 999;
    user-select: none;

    @media (max-width: 767px) {
        display: flex;
        padding: 0 10px;
        .mv-icon, .lyric-icon, .heart-icon{
            display: none;
        }
    }
`;

const SongInfoStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    height: 100%;
`;

const ActionStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    button {
        padding: 4px;
        border: none;
        outline: none;
        transition: all 0.25s linear;
        &:hover {
            i { 
                background-color: var(--alpha-bg); 
            }
        }

        i {
            border-radius: 100%;
            padding: 6px 10px;
            &.--active {
                color: var(--purple-primary);
            }
        }
    }
`;

const NavStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items:center;
`;

const NameStyled = styled.div`
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    text-transform: capitalize;
    color: var(--text-primary);
    font-size: 14px;
    @media (max-width: 767px) {
        font-size: 12px;
    }
`;

const ArtistStyled = styled.div`
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    text-transform: capitalize;
    color: var(--text-secondary);
    font-size: 12px;

`;

const DivideStyled = styled.div`
    width: 1px;
    height: 30px;
    margin: 0 12px 0 16px;
    background-color: var(--alpha-bg);
    @media (max-width: 767px) {
        display: none;
    }
`;

const Controls = () => {

    const { toggleSong, nextSong, prevSong, addSongToHistory, songLoaded } = useDispatchs();

    const currentSong = useSelector(state => state.songs.current);
    const isPlaying = useSelector(state => state.songs.isPlaying);

    const songAudioElm = useRef();
    const songImageElm = useRef();
    const currentTimeElm = useRef();
    const durationTimeElm = useRef();
    const durationProcessElm = useRef();

    useEffect(() => {
        const title = `${currentSong.name} - ${currentSong.artist}`;
        document.title = title;
        songAudioElm.current.src = api.GET_SONG_SRC(currentSong.id)
        console.log('Song getted !!')
    }, [currentSong]);

    const handleTimeUpdate = (e) => {
        const _this = e.target;
        if (_this.duration) {
            const percent = Math.floor(_this.currentTime * 100 / _this.duration);
            durationProcessElm.current.setWidth(percent);
            currentTimeElm.current.innerHTML = convertDuration(Math.floor(_this.currentTime));
        }
    };

    const handleLoadedData = (e) => {
        isPlaying ? e.target.play() : e.target.pause();
        songLoaded()
        console.log('Song loaded !!')
        addSongToHistory({
            ...currentSong,
            playlistId: storage.getCurrentPlaylistDefault().id,
        });

    };

    const handleNextSong = () => {
        nextSong()
    };

    const handlePrevSong = () => {
        prevSong()
    };

    const handleEndSong = () => {
        const repeat = storage.getRepeat();
        const currentPlaylist = storage.getCurrentPlaylistDefault();
        const currentSongIndex = currentPlaylist.songs.findIndex(song => song.id === currentSong.id)
        if (repeat === 2) {
            songAudioElm.current.load();
            return;
        } else if (repeat === 0 & currentSongIndex === currentPlaylist.songs.length - 1) {
            toggleSong()
            return;
        }
        handleNextSong();
    }

    const handleDurationSliderMouseUp = useCallback((width) => {
        songAudioElm.current.currentTime = Math.round(songAudioElm.current.duration / 100 * width);
    }, [])


    return (

        <ContainerStyled>
            <audio ref={songAudioElm}
                src="https://mplaylist-zmp3.zadn.vn/99YFw722aFg/zhls/live/855a669d5ad8b386eac9/index.m3u8"
                onEnded={handleEndSong}
                onLoadedData={handleLoadedData}
                onTimeUpdate={handleTimeUpdate}
            />
            <SongInfoStyled>
                <img className="md:w-16 md:h-16 h-10 w-10 rounded-full"
                    src={currentSong.image}
                    ref={songImageElm} 
                    alt=""
                />
                <div className="">
                    <NameStyled title={currentSong.name}>{currentSong.name}</NameStyled>
                    <ArtistStyled title={currentSong.artist}>{currentSong.artist}</ArtistStyled>
                </div>
                <HeartButton data={currentSong}/>
            </SongInfoStyled>
            <div className="flex flex-col justify-center flex-1 px-2">
                <ActionStyled>
                    <RandomButton />
                    <button className={storage.getCurrentSong() === 0 ? 'pointer-events-none opacity-50' : ''}>
                        <i onClick={handlePrevSong} className="fas fa-step-backward"/>
                    </button>
                    <PlayButton songAudioRef={songAudioElm} songImageRef={songImageElm}/>
                    <button>
                        <i onClick={handleNextSong} className="fas fa-step-forward"/>
                    </button>
                    <RepeatButton />
                </ActionStyled>
                <div className="flex items-center">
                    <span ref={currentTimeElm} className="text-xs text-gray-400 inline-block w-10">00:00</span>
                    <Slider ref={durationProcessElm} onHandleMouseUp={handleDurationSliderMouseUp}/>
                    <span ref={durationTimeElm} className="text-xs w-10 text-right">{convertDuration(currentSong.duration)}</span>
                </div>
            </div>
            <NavStyled>
                <MvButton song={currentSong} />
                <LyricButton song={currentSong} />
                <div className="hidden md:block">
                    <VolumeButton songAudioRef={songAudioElm} />
                </div>
                <DivideStyled></DivideStyled>
                <TogglePlayerQueueButton />
            </NavStyled>
        </ContainerStyled>
    )
}

export default Controls;