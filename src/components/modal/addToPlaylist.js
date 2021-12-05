import styled from 'styled-components';
import { useSelector } from 'react-redux';

import useDispatchs from '../../hooks/useDispatchs';
import storage from '../../utils/storage';

const Container = styled.div`
    position: absolute;
    right: 100%;
    width: 230px;
    z-index: 1000;
    user-select: none;
    background-color: var(--primary-bg);
    color: var(--text-secondary);
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    display: none;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 15px;
    border-bottom: 1px solid var(--alpha-bg);

    &:hover {
        background-color: var(--alpha-bg);
        span {
            color: var(--text-primary);
        }
    }

`;

const Row = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    cursor: pointer;

    .check-icon {
        display: none;
    }

    &.--active {
        .check-icon {
            display: block;
        }
    }

    &:hover {
        background-color: var(--alpha-bg);
        span {
            color: var(--text-primary);
        }
    }

`;

const List = styled.ul`
    max-height: 200px;
    overflow: auto;
`;

const Index = () => {

    const { openCreatePlaylistModal } = useDispatchs();
    const playlists = storage.getplaylists();
    const {song} = useSelector(state => state.modal.songTooltipData)
    const isCheck = playlists.map(playlist => playlist.songs.findIndex(item => item.id === song.id) !== -1)
    
    const handleClick = (e, index) => {
        if (isCheck[index]) {
            isCheck[index] = false;
            playlists[index].songs.splice(
                playlists[index].songs.findIndex(item => item.id === song.id),
                1
            );
        } else {
            isCheck[index] = true;
            playlists[index].songs.push(song);
        }
        console.log(isCheck)
        e.target.classList.toggle('--active');
        storage.setplaylists(playlists)
    }

    const renderPlaylist = (playlists) => {
        return playlists.map(({ name, id }, index) => {
            return <Row key={id} onClick={(e) => handleClick(e, index)} className={isCheck[index] ? '--active' : ''}>
                <div className="flex items-center">
                    <div className="mr-2 h-8 w-8 flex">
                        <i className="fas fa-compact-disc m-auto text-lg" />
                    </div>
                    <span>{name}</span>
                </div>
                <i className="fas fa-check check-icon text-purple" />
            </Row>
        })
    }

    return (
        <Container className="dkm">
            <Header onClick={ openCreatePlaylistModal }>
                <img className="mr-2 h-8 w-8" src="/zingmp3/images/icons/thumb-add.2971eb21.svg" alt="" />
                <span className="text-primary">Tạo playlist mới</span>
            </Header>
            <List className="scrollbar">
                {renderPlaylist(playlists)}
            </List>
        </Container>
    )
}

export default Index;