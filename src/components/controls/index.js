import styled from 'styled-components';
import { useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { convertDuration, storage } from '../../utils';
import * as actions from '../../redux/actions';
import * as storageKey from '../../constant/storage';
import * as api from '../apis/index';
import Slider from './slider';
import PlayerQueue from '../playerQueue';
import RepeatButton from './repeatButton';
import VolumeButton from './volumeButton';
import PlayButton from './playButton';
import SongLyric from '../../components/songLyric';
import SongVideo from '../../components/songVideo';

const ControlsContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    background-color: var(--player-bg);
    display: grid;
    grid-template-columns: 3fr 4fr 3fr;
    padding: 0 20px;
    color: #fff;
    z-index: 99;
`;

const Action = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    button {
        padding: 4px;
        border: none;
        outline: none;
        margin: 0 8px;
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

const Nav = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items:center;

    .mv-icon {
        filter: invert(1);
        padding: 6px;
        border-radius: unset;
    }
`;

const Name = styled.div`
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    text-transform: capitalize;
    color: #fff;
    font-size: 14px;
`;

const Divide = styled.div`
    width: 1px;
    height: 30px;
    margin: 0 12px 0 16px;
    background-color: var(--alpha-bg);
`;

const PlaylistIconWrapper = styled.label`
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    display: block;
    transition: background 0.1s linear;
    cursor: pointer;

    &:hover {
        background-color: var(--alpha-bg);
    }

    img {
        width: 100%;
        height: 100%;
    }
    .icon-unplaying {
        filter: invert(1);
        &.--active {
            background-color: var(--purple-primary);
        }
    }
    .gif-playing {
        filter: hue-rotate(45deg);
        object-fit: cover;
    }
`;

const PlayerQueueTempInput = styled.input`
    &:checked ~ div {
        transform: translateX(0);
    }
`;

const SongLyricTempInput = styled.input`
    &:checked ~ div {
        height: calc(100% - var(--control-height));
    }
`;

const SongVideoTempInput = styled.input`
    &:checked ~ div {
        height: calc(100% - var(--control-height));
    }
`;

const Controls = () => {

    console.log('Control render !!')
    
    const dispatch = useDispatch();
    const currentSong = useSelector(state => state.songs.current);
    const isPlaying = useSelector(state => state.songs.isPlaying);

    const songAudioElm = useRef();
    const songImageElm = useRef();
    const currentTimeElm = useRef();
    const durationTimeElm = useRef();
    const durationProcessElm = useRef();

    useEffect(() => {
        const title = `${currentSong.name} - ${currentSong.singer}`;
        document.title = title;
        songAudioElm.current.src = api.GET_SONG_SRC(currentSong.id)
        console.log('Song getted !!')
    }, [currentSong]);

    const handleTimeUpdate = (e) => {
        const _this = e.target;
        if ( _this.duration ){
            const percent = Math.floor(_this.currentTime * 100 / _this.duration);
            durationProcessElm.current.setWidth(percent);
            currentTimeElm.current.innerHTML = convertDuration(Math.floor(_this.currentTime));
        }
    };

    const handleLoadedData = (e) => {
        isPlaying ? e.target.play() : e.target.pause();
        // durationTimeElm.current.innerHTML = convertDuration(e.target.duration);
        dispatch(actions.songLoaded());

        console.log('Song loaded !!')
        //save history        
        dispatch(actions.addSongToHistory({
            ...currentSong,
            playlistId: storage.get(storageKey.CURRENT_PLAYLIST_DEFAULT).id,
        }));

        //save counter listened
        // const playlistDefault = storage.get(storageKey.DEFAULT_PLAYLIST);
        // const index = playlistDefault.songs.findIndex(song => song.id === currentSong.id);
        // playlistDefault.songs[index].listened++;
        // storage.set(storageKey.DEFAULT_PLAYLIST, playlistDefault);
    };

    const handleNextSong = () => {
        dispatch(actions.nextSong());
    };

    const handlePrevSong = () => {
        dispatch(actions.prevSong());
    };

    const handleEndSong = () => {
        const repeat = storage.get(storageKey.REPEAT);
        const currentPlaylist = storage.get(storageKey.CURRENT_PLAYLIST_DEFAULT);
        const currentSongIndex = currentPlaylist.songs.findIndex(song => song.id === currentSong.id)
        if (repeat === 2) {
            songAudioElm.current.load();
            return;
        } else if (repeat === 0 & currentSongIndex === currentPlaylist.songs.length - 1) {
            dispatch(actions.toggleSong());
            return;
        }
        handleNextSong();
    }

    const handleDurationSliderMouseUp = useCallback((width) => {
        songAudioElm.current.currentTime = Math.round(songAudioElm.current.duration / 100 * width);
    }, [])

    const handleToggleRandom = (e) => {
        e.target.classList.toggle('--active');
        dispatch(actions.toggleRandomPlay());
    }
 
    return (
        <ControlsContainer>
            <audio 
                onEnded={ handleEndSong }
                onLoadedData= { handleLoadedData }
                onTimeUpdate={ handleTimeUpdate }
                ref={songAudioElm} 
                src={ currentSong.src }
            ></audio>
            <div className="flex h-full items-center gap-3">
                <img
                    ref={songImageElm}
                    className="w-16 h-16 rounded-full"
                    src={currentSong.image}
                    alt=""
                />
                <div>
                    <Name>{currentSong.name}</Name>
                    <span className="text-xs text-gray-400">{currentSong.singer}</span>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <Action>
                    <button >
                        <i 
                            title="Phát ngẫu nhiên"
                            onClick={handleToggleRandom}
                            className={`fas fa-random ${storage.get(storageKey.RANDOM) ? '--active' : ''}`}
                        ></i>
                    </button>
                    <button className={ storage.get(storageKey.CURRENT_SONG) === 0 ? 'pointer-events-none opacity-50' : '' }>
                        <i 
                            onClick={ handlePrevSong }
                            className="fas fa-step-backward" 
                        />
                    </button>
                    <PlayButton 
                        songAudioRef={songAudioElm}
                        songImageRef={songImageElm}
                    />
                    <button>
                        <i 
                            onClick={ handleNextSong } 
                            className="fas fa-step-forward" 
                        />
                    </button>
                    <RepeatButton />
                </Action>
                <div className="flex items-center">
                    <span ref={currentTimeElm} className="text-xs text-gray-400 inline-block w-10">00:00</span>
                    <Slider 
                        ref={ durationProcessElm }
                        onHandleMouseUp={ handleDurationSliderMouseUp }
                    />
                    <span ref={durationTimeElm} className="text-xs w-10 text-right">{convertDuration(currentSong.duration)}</span>
                </div>
            </div>
            <Nav>
                <button title="Xem MV">
                    <label htmlFor="song-video-checkbox">
                        <img className="icon-btn mv-icon" src="/zingmp3/images/icons/mv-icon.png" alt="" />
                    </label>
                </button>
                <button title="Xem lời bài hát">
                    <label htmlFor="song-lyric-checkbox">
                        <i className="far fa-list-alt icon-btn"></i>
                    </label>
                </button>
                <VolumeButton songAudioRef={songAudioElm} />
                <Divide></Divide>
                <button title="Danh sách phát">
                    <PlaylistIconWrapper htmlFor="playlist-checkbox">
                        { isPlaying 
                            ? <img 
                                className="gif-playing"
                                src="/zingmp3/images/icons/music-note-icon-dribbble.gif" alt="" 
                            /> 
                            : <img 
                                onClick={(e) => e.target.classList.toggle('--active')}
                                className="icon-unplaying p-1"
                                src="/zingmp3/images/icons/playlist-3749298-3125483.png" alt="" 
                            />
                        }
                    </PlaylistIconWrapper>
                </button>
            </Nav>
            <div>
                <PlayerQueueTempInput hidden type="checkbox" id="playlist-checkbox" />
                <PlayerQueue currentSong={currentSong} />
            </div>
            <div>
                <SongLyricTempInput hidden type="checkbox" id="song-lyric-checkbox" />
                <SongLyric currentSong={currentSong} />
            </div>
            <div>
                <SongVideoTempInput hidden type="checkbox" id="song-video-checkbox" />
                <SongVideo currentSong={currentSong} />
            </div>
        </ControlsContainer>
    )
}

export default Controls;