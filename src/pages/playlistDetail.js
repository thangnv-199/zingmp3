import styled, { keyframes } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import PlaylistButton from '../components/button/playListButton';
import Song from '../components/song';
import BarAnimation from '../components/barAnimatiton';
import { zingChart } from '../data/zingChart';
import storage from '../utils/storage';
import useDispatchs from '../hooks/useDispatchs';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Container = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;
const Header = styled.div`
    text-align: center;
    @media (max-width: 1200px) {
        display: flex;
        gap: 20px;
        text-align: left;
    }
`;
const Thumnail = styled.div`
    position: relative;
    margin-bottom: 20px;
    border-radius: 20px;
    overflow: hidden;
    width: 300px;
    height: 300px;
    transition: all 0.4s linear;
    &.--playing {
        border-radius: 100%;
        animation: ${rotate} 30s linear infinite;
        .overlay {
            opacity: 1;
            transition: all 0.4s linear;
            visibility: visible;
        }
    }
    
    @media (max-width: 1200px) {
        margin-bottom: 0px;
        width: 200px;
        height: 200px;
    }
`;
const PlaylistButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 1200px) {
        justify-content: flex-start;
    }
`;
const ImageGroup = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    flex-wrap: wrap;
    & > * {
        width: 50%;
    }
   
`;
const Empty = styled.div`
    width: 100%;
    padding: 30px 0;
    min-height: 200px;
    background-color: var(--alpha-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        color: var(--text-secondary);
    }
`;
const Body = styled.div`
   max-height: calc(100vh - var(--control-height) - var(--header-height));
   overflow-y: auto;
   flex: 1;
   padding-right: 10px;

   @media (max-width: 1200px) {
    max-height: unset;
   }
`
const PlaylistDetail = () => {

    console.log('Playlist Detail render !!')

    const { openCreatePlaylistModal, toggleSong, editPlaylist } = useDispatchs();
    const params = useParams();

    const playlists = storage.getplaylists();
    const currentPlaylist = playlists.find(playlist => playlist.id === params.id);
    const playlistPlaying = useSelector(state => state.songs.playlist);
    const isPlaying = useSelector(state => state.songs.isPlaying);
    const [suggestionsSongs, setSuggestitonsSongs] = useState([...zingChart.songs].sort(() => 0.5 - Math.random()).slice(0, 10))

    const handleEdit = () => {
        openCreatePlaylistModal();
        editPlaylist(currentPlaylist.id);
    }

    const renderSongs = (playlist) => {
        return playlist.songs.map((song, index) => (
            <Song
                key={index}
                data={song}
                playlist={playlist}
            />
        ))
    };

    const random = () => {
        return Math.floor(Math.random() * currentPlaylist.songs.length);
    }

    const isCheckPlaylistPlaying = () => {
        return currentPlaylist.id === playlistPlaying.id && isPlaying;
    }

    const handleTogglePlay = () => {
        toggleSong();
    }

    const handleRandom = () => {
        setSuggestitonsSongs([...zingChart.songs].sort(() => 0.5 - Math.random()).slice(0, 10));
    }

    return (
        <Container>
            <Header>
                <Thumnail className={isCheckPlaylistPlaying() ? '--playing' : ''}>
                    {!currentPlaylist.songs.length
                        ? <img src="/zingmp3/images/album_default.png" alt="" />
                        : <>
                            <ImageGroup>
                                <img src={currentPlaylist.songs[random()].image} alt="" />
                                <img src={currentPlaylist.songs[random()].image} alt="" />
                                <img src={currentPlaylist.songs[random()].image} alt="" />
                                <img src={currentPlaylist.songs[random()].image} alt="" />
                            </ImageGroup>
                            <div onClick={handleTogglePlay} className="overlay cursor-pointer">
                                <BarAnimation />
                            </div>
                        </>
                    }
                </Thumnail>
                <div className="flex flex-col justify-between">
                    <div className="mb-5">
                        <p className="text-primary font-bold text-lg">
                            {currentPlaylist.name}
                            <i
                                onClick={() => handleEdit(currentPlaylist.id)}
                                className="fas fa-pen ml-2 cursor-pointer"
                            />
                        </p>
                        <p>
                            <span className="text-secondary text-xs">Đã tạo : </span>
                            <span className="text-primary text-sm">{currentPlaylist.createdAt}</span>
                        </p>
                        <p>
                            <span className="text-secondary text-xs">Tổng số bài Hát : </span>
                            <span className="text-primary text-sm font-bold">{currentPlaylist.songs.length}</span>
                        </p>
                    </div>
                    <PlaylistButtonWrapper>
                        {currentPlaylist.songs.length ? <PlaylistButton playlist={currentPlaylist} /> : ''}
                    </PlaylistButtonWrapper>
                </div>
            </Header>
            <Body className="scrollbar">
                {currentPlaylist.songs.length
                    ? renderSongs(currentPlaylist)
                    : <Empty>
                        <img className="mb-5" src="/zingmp3/images/icons/dics-music-icon.3925fc01.svg" alt="" />
                        <span>Không có bài hát trong playlist của bạn</span>
                    </Empty>
                }
                <div className="my-5 flex justify-between">
                    <p className="text-2xl font-bold">Bài hát gợi ý</p>
                    <button 
                        onClick={ handleRandom }
                        className="button --purple"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>Làm mới</span>
                    </button>
                </div>
                {renderSongs({
                    ...zingChart,
                    songs: suggestionsSongs
                })}
            </Body>
        </Container>
    )
}

export default PlaylistDetail;