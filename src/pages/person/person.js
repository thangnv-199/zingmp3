import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Song from '../../components/song';
import PlaylistButton from '../../components/button/playListButton';
import PlaylistCard from '../../components/card/playlistCard';
import {zingChart} from '../../data/zingChart';
import { openPlaylistModal } from '../../redux/actions';

const SongList = styled.div`
    flex: 1;
    height: 240px;
    overflow-y: auto;
`;

const Playlist = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

const AddPlaylistButton = styled.div`
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex-direction: column;
    gap: 20px;
    background: linear-gradient(
        33deg,#5a1eae -7%,#ce267a 117%);
    cursor: pointer;

    i {
        font-size: 48px;
    }
`;

const Person = () => {

    const dispatch = useDispatch();
    const playlists = useSelector(state => state.playlist.list);

    const renderSongs = (zingChart) => {
        return zingChart.songs.map((song, index) => (
            <Song key={index} data={song} playlist={ zingChart } />
        ))
    };

    const renderPlaylist = (playlists) => (
        playlists.map((item, index) => (
            <PlaylistCard
                imageSrc="/images/album_default.png"
                name={item.name}
                id={item.id}
                playlist={ item }
                key={index}
            />
        ))
    );
    
    return (
        <div>
            <div className="mb-8">
                <header
                    className="text-white flex justify-between items-center mb-3">
                    <h3 className="font-bold text-xl">Bài hát</h3>
                    <div className="flex items-center">
                        <a href="#!" className="button mr-3">
                            <i className="fas fa-upload"></i>
                            Tải lên
                        </a>
                        <PlaylistButton playlist={ zingChart } />
                    </div>
                </header>
                <div className="flex">
                    <div>
                        <img className="flex-shrink-0" src="/images/songs/7e6088a95d78a12eae1cf55d0b3cc3b9.webp" alt="" />
                    </div>
                    <SongList className="scrollbar">
                        {renderSongs(zingChart)}
                    </SongList>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-xl text-white mb-5">Playlist</h3>
                <Playlist>
                    <AddPlaylistButton onClick={() => dispatch(openPlaylistModal())}>
                        <i className="fas fa-plus"></i>
                        <span>Tạo playlist mới</span>
                    </AddPlaylistButton>
                    {renderPlaylist(playlists)}
                </Playlist>
            </div>
        </div>
    )
}

export default Person;