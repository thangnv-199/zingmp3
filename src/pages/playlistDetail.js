import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { editPlaylist } from '../redux/actions';
import PlaylistButton from '../components/button/playListButton';
import Song from '../components/song';
import { storage } from '../utils';
import * as storageKey from '../constant/storage';

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

const ImageWrapper = styled.div`
    height: 200px;
    width: 200px;
    margin-right: 20px;
    border-radius: 5px;
`;

const PlaylistDetail = () => {

    const dispatch = useDispatch();
    const params = useParams();

    const playlists = storage.get(storageKey.PLAYLISTS);
    const [currentPlaylist, setCurrentPlaylist] = useState(
        playlists.find(playlist => playlist.id === params.id)
    )
    
    const handleEdit = () => {
        dispatch(editPlaylist(currentPlaylist.id));
    }

    const handleRemoveInPlaylist = (id) => {
        currentPlaylist.songs.splice(
            currentPlaylist.songs.findIndex(song => song.id === id),
            1
        );
        playlists.splice(
            playlists.findIndex(playlist => playlist.id === currentPlaylist.id),
            1,
            currentPlaylist
        )
        storage.set('playlist', playlists);
        setCurrentPlaylist({
            ...currentPlaylist
        });
    }

    const renderSongs = (playlist) => {
        return playlist.songs.map((song, index) => (
            <Song 
                key={index} 
                data={song} 
                onRemoveInPlaylist={ handleRemoveInPlaylist } 
                playlist={playlist}
            />
        ))
    };

    return (
        <div>
            <header className="flex mb-8">
                <ImageWrapper>
                    <img src="/zingmp3/images/album_default.png" alt="" />
                </ImageWrapper>
                <div className="flex flex-col justify-between">
                    <div>
                        <p className="text-primary font-bold text-lg">
                            {currentPlaylist.name}
                            <i 
                                onClick={ () => handleEdit(currentPlaylist.id) }
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
                    { currentPlaylist.songs.length ? <PlaylistButton playlist={ currentPlaylist } /> : ''}
                </div>
            </header>
            <div>
                { currentPlaylist.songs.length 
                ? renderSongs(currentPlaylist)
                : <Empty>
                    <img className="mb-5" src="/zingmp3/images/icons/dics-music-icon.3925fc01.svg" alt="" />
                    <span>Không có bài hát trong playlist của bạn</span>
                </Empty>
                }
            </div>
        </div>
    )
}

export default PlaylistDetail;