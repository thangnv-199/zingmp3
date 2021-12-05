import { useState, memo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


import Song from '../song';
import { zingChart } from '../../data/zingChart';
import storage from '../../utils/storage';

const Container = styled.div`
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);    
    .song {
        display: flex;
        
        &-label {
            padding-left: 20px;
        }

        &-album {
            display: none;
        }

        &-actions {
            margin-left: auto;
        }
        
        &:hover {
            .song-hover-action {
                display: flex;
            }
            .song-action {
                display: none;
            }
        }

        .lyric-icon, .mv-icon {
            display: none;
        }

        &.--active {
            background-color: var(--purple-primary);
            .heart-icon {
                filter: brightness(2);
            }
        }
        .music-icon {
            display: none;
        }
    }

    @media (max-width: 1023px) {
        .song {
            &-duration {
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
    padding: 0 8px;
`;

const SongsListened = styled.div`
    
    & > div {
        opacity: 0.5;
        &:last-child {
            opacity: 1;
        }
    }
`;

const PlayerQueue = () => {
    console.log('PlayQueue render !!')

    const [currentTab, setCurrentTab] = useState(0);

    const currentPlaylist = useSelector(state => state.songs.playlist);
    const currentSong = useSelector(state => state.songs.current);
    const songsHistory = storage.getHistory();
    const currentSongIndex = currentPlaylist.songs.findIndex(song => song.id === currentSong.id);

    const renderSongsNotListen = (playlist) => {
        return currentPlaylist.songs.slice(currentSongIndex + 1).map((song, index) => (
            <Song
                playlist={playlist}
                data={song}
                key={index}
            />
        ))
    }

    const renderSongsListened = (playlist) => {
        return currentPlaylist.songs.slice(0, currentSongIndex + 1).map((song, index) => (
            <Song
                playlist={playlist}
                data={song}
                key={index}
            />
        ))
    }

    const renderSongsHistory = (songsHistory) => {
        const playlists = storage.getplaylists();
        return songsHistory.map((song, index) => {
            const playlist = playlists.find(item => item.id === song.playlistId) || zingChart
            return (
                <Song
                    playlist={playlist}
                    data={song}
                    key={index}
                />
            )
        })
    }

    return (

        <Container>
            <Header>
                <ButtonGroup>
                    <Button
                        onClick={() => setCurrentTab(0)}
                        className={currentTab === 0 ? '--active' : ''}
                    >
                        Danh sách phát
                    </Button>
                    <Button
                        onClick={() => setCurrentTab(1)}
                        className={currentTab === 1 ? '--active' : ''}
                    >
                        Nghe gần đây
                    </Button>
                    <Button
                        onClick={() => setCurrentTab(2)}
                        className={currentTab === 2 ? '--active' : ''}
                    >
                        Nghe nhiều
                    </Button>
                </ButtonGroup>
            </Header>
            <Body className="scrollbar">
                {currentTab === 0 && <div>
                    <SongsListened>
                        {renderSongsListened(currentPlaylist)}
                    </SongsListened>
                    <div className="text-left px-3 py-2">
                        <p className="font-bold">Tiếp theo</p>
                        <p>
                            <span className="text-secondary inline-block mr-1">Từ playlist</span>
                            <span className="text-purple font-semibold">{currentPlaylist.name}</span>
                        </p>
                    </div>
                    <div>
                        {renderSongsNotListen(currentPlaylist)}
                    </div>
                </div>
                }
                {currentTab === 1 && <div>
                    {renderSongsHistory(songsHistory)}
                </div>
                }
                {currentTab === 2 && <div className="text-xl text-white">
                    <p className="p-5">Tính năng đang cập nhật</p>
                </div>
                }
            </Body>
        </Container>
    )
}

export default memo(PlayerQueue);