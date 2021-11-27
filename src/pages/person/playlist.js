import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';


import PlaylistCard from '../../components/card/playlistCard';
import { openPlaylistModal } from '../../redux/actions';

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

const PlaylistPage = () => {

    const dispatch = useDispatch();

    const playlists = useSelector(state => state.playlist.list);

    const renderPlaylist = (playlists) => (
        playlists.map((item, index) => (
            <PlaylistCard
                imageSrc="/images/album_default.png"
                name={item.name}
                id={item.id}
                playlist={item}
                key={index}
            />
        ))
    )

    return (
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
    )
}

export default PlaylistPage;