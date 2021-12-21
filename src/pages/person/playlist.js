import styled from 'styled-components';
import { useSelector } from 'react-redux';

import useDispatchs from '../../hooks/useDispatchs';
import PlaylistCard from '../../components/card/playlistCard';

const Playlist = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    align-items: center;

    @media (max-width: 1023px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const AddPlaylistButtonContainer = styled.div`
    height: 100%;
    min-height: 200px;
`

const AddPlaylistButton = styled.div`
    height: 100%;

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

const PlaylistPage = () => {

    const { openCreatePlaylistModal } = useDispatchs();

    const playlists = useSelector(state => state.playlist.list);

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
    )

    return (
        <div>
            <h3 className="font-bold text-xl text-white mb-5">Playlist</h3>
            <Playlist>
                <AddPlaylistButtonContainer>
                    <AddPlaylistButton onClick={ openCreatePlaylistModal }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Tạo playlist mới</span>
                    </AddPlaylistButton>
                </AddPlaylistButtonContainer>
                {renderPlaylist(playlists)}
            </Playlist>
        </div>
    )
}

export default PlaylistPage;