import styled from 'styled-components';
import { useSelector } from 'react-redux';

import EmptyBox from '../../components/emptyBox';
import Song from '../../components/song';
import PlaylistButton from '../../components/button/playListButton';
import PlaylistCard from '../../components/card/playlistCard';
import useDispatchs from '../../hooks/useDispatchs';

const SongList = styled.div`
    flex: 1;
    height: 240px;
    overflow-y: auto;
`;

const Playlist = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const AddPlaylistButton = styled.div`
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
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

    const { openCreatePlaylistModal } = useDispatchs();
    const playlists = useSelector(state => state.playlist.list);
    const playlist = useSelector(state => state.playlist.library);


    const renderSongs = (playlist) => {
        return playlist.songs.map((song, index) => (
            <Song
                key={index}
                data={song}
                playlist={playlist}
            />
        ))
    };

    const renderPlaylist = (playlists) => (
        playlists.map((item, index) => (
            <PlaylistCard
                imageSrc="/zingmp3/images/album_default.png"
                name={item.name}
                id={item.id}
                playlist={item}
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
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                            Tải lên
                        </a>
                        <PlaylistButton playlist={playlist} />
                    </div>
                </header>
                {playlist.songs.length === 0
                    ? <EmptyBox
                        label="Không có bài hát nào thư viện nhạc của bạn"
                        imageSrc="/zingmp3/images/icons/dics-music-icon.3925fc01.svg"
                    />
                    : <div className="flex">
                        <img className="w-60 h-60 hidden md:block" src="/zingmp3/images/album_default.png" alt="" />
                        <SongList className="scrollbar pb-0">
                            {renderSongs(playlist)}
                        </SongList>
                    </div>
                }
            </div>
            <div>
                <h3 className="font-bold text-xl text-white mb-5">Playlist</h3>
                <Playlist>
                    <div>
                        <AddPlaylistButton onClick={ openCreatePlaylistModal }>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <span>Tạo playlist mới</span>
                        </AddPlaylistButton>
                    </div>
                    {renderPlaylist(playlists)}
                </Playlist>
            </div>
        </div>
    )
}

export default Person;