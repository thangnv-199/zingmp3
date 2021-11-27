import { useState, memo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {zingChart} from '../../data/zingChart';

import { storage } from '../../utils';
import * as storageKey from '../../constant/storage';
import Song from '../song';

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 90px;
    width: var(--player-queue-width);
    background-color: var(--queue-player-bg);
    transform: translateX(100%);
    transition: transform 0.4s linear;
    z-index: 99;

    .song {
        display: flex;
        &-icon {
            display: none;
        }
        &-action {
            display: none;
            margin-left: auto;
        }

        &-label {
            padding-left: 20px;
            margin-left: auto;
        }
        
        &:hover {
            .song-action {
                display: flex;
            }
            .song-label {
                display: none;
            }
        }
    }
    
`;

const Header = styled.div`
    height: 70px;
    padding: 14px 12px;
    display: flex;
    align-items: center;
    gap: 5px;
    text-align: center;
    i {
        margin: auto;
        height: 32px;
        width: 32px;
        border-radius: 100%;
        background-color: var(--alpha-bg);
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--alpha-bg);
    border-radius: 20px;
    flex: 1;
    padding: 4px;
`;

const Button = styled.button`
    border: none;
    outline: none;
    padding: 5px 0;
    font-size: 11px;
    color: var(--nav-text);
    flex: 1;
    border-radius: 20px;

    &.--active {
        background-color: var(--tab-active-bg);
        color: var(--text-primary);
        font-weight: bold;
    }

    &:hover {
        color: var(--text-primary)
    }
`;

const Body = styled.div`
    overflow-y: auto;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    bottom: 0;
`;

const SongsListened = styled.div`
    
    & > div {
        opacity: 0.5;
        &:last-child {
            opacity: 1;
        }
    }
`;

const PlayerQueue = ({ currentSong }) => {
    console.log('PlayQueue render !!')

    const [currentTab, setCurrentTab] = useState(0);

    const currentPlaylist = useSelector(state => state.songs.playlist);
    const songsHistory = storage.get(storageKey.HISTORY);
    // const songsHistory = useSelector(state => state.songs.history);
    // const topSongListened = storage.get(storageKey.DEFAULT_PLAYLIST);
    const currentSongIndex = currentPlaylist.songs.findIndex(song => song.id === currentSong.id);

    const renderSongsNotListen = (playlist) => {
        return currentPlaylist.songs.slice(currentSongIndex + 1).map((song, index) => (
            <Song
                playlist={playlist}
                data={song}
                key={index}
                label="duration"
            />
        ))
    }

    const renderSongsListened = (playlist) => {
        return currentPlaylist.songs.slice(0, currentSongIndex + 1).map((song, index) => (
            <Song
                playlist={playlist}
                data={song}
                key={index}
                label="duration"
            />
        ))
    }
    
    const renderSongsHistory = (songsHistory) => {
        const playlists = storage.get(storageKey.PLAYLISTS) || [];
        return songsHistory.map((song, index) => {
            const playlist = playlists.find(item => item.id === song.playlistId) ||  zingChart
            return (
                <Song
                    playlist={playlist}
                    data={song}
                    key={index}
                    label="duration"
                />
            )
        })
    }

    // const renderTopSongsListened = () => {
    //     topSongListened.songs.sort((a, b) => b.listened - a.listened)
    //     return topSongListened.songs.map((song, index) => (
    //         <Song
    //             playlist={zingChart}
    //             data={song}
    //             key={index}
    //             label="duration"
    //         />
    //     ))
    // }

    const handleOpenTab = (tabIndex) => {
        setCurrentTab(tabIndex)
    }

    return (
        <Container>
            <Header>
                <ButtonGroup>
                    <Button 
                        onClick={() => handleOpenTab(0) } 
                        className={currentTab === 0 ? '--active' : ''}
                    >
                        Danh sách phát
                    </Button>
                    <Button 
                        onClick={() => handleOpenTab(1) } 
                        className={currentTab === 1 ? '--active' : ''}
                    >
                        Nghe gần đây
                    </Button>
                    <Button 
                        onClick={() => handleOpenTab(2) } 
                        className={currentTab === 2 ? '--active' : ''}
                    >
                        Nghe nhiều
                    </Button>
                </ButtonGroup>
                {/* <i className="far fa-clock icon-btn m-auto"></i>
                <i className="fas fa-ellipsis-h icon-btn m-auto"></i> */}
            </Header>
            <Body className="scrollbar">
                { currentTab === 0  && <div>
                        <SongsListened>
                            {renderSongsListened(currentPlaylist)}
                        </SongsListened>
                        <div className="text-left px-3 py-2"> 
                            <p className="font-bold">Tiếp theo</p>
                            <p>
                                <span className="text-secondary inline-block mr-1">Từ playlist</span>
                                <span className="text-purple-light">{currentPlaylist.name}</span> 
                            </p>
                        </div>
                        <div>
                            {renderSongsNotListen(currentPlaylist)}
                        </div>
                    </div>
                }
                { currentTab === 1 && <div>
                        {renderSongsHistory(songsHistory)}
                    </div>
                }
                {/* { currentTab === 2 && <div className="text-xl text-white">
                        {renderTopSongsListened()}
                    </div>
                } */}
            </Body>
        </Container>
    )
}

export default memo(PlayerQueue);