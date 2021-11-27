import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { 
    openPlaylistModal, 
    closeAddToPlaylistModal, 
} from '../../redux/actions';

import { storage } from '../../utils';
import * as storageKey from '../../constant/storage';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    z-index: 100;
    user-select: none;

    .overlay {
        opacity: 1;
        visibility: visible;
    }

`;

const Modal = styled.div`
    min-width: 300px;
    margin: auto;
    background-color: var(--layout-bg);
    color: var(--text-secondary);
    position: relative;
    padding-bottom: 20px;
    border-radius: 8px;
    z-index: 22;
`;  

const Header = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 20px;
    border-bottom: 1px solid var(--alpha-bg);

    &:hover {
        background-color: var(--alpha-bg);
        span {
            color: var(--white);
        }
    }

`;

const Row = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background-color: var(--alpha-bg);
        span {
            color: var(--white);
        }
    }

`;

const List = styled.ul`
    max-height: 300px;
    overflow: auto;
`;

const Index = () => {

    const dispatch = useDispatch();
    const playlists = storage.get(storageKey.PLAYLISTS) || [];
    const [isCheck, setIsCheck] = useState(
        playlists.map(
            playlist => playlist.songs.some(
                song => song.id === storage.get(storageKey.TEMP).id
            )
        )
    );
    
    const handleClick = (index) => {
        const currentSong = storage.get(storageKey.TEMP);
        
        if (isCheck[index]) {
            isCheck[index] = false;
            playlists[index].songs.splice(
                playlists[index].songs.findIndex(song => song.id === currentSong.id),
                1
            );
        } else {
            isCheck[index] = true;
            playlists[index].songs.push(currentSong);
        }
        storage.set(storageKey.PLAYLISTS, playlists)
        setIsCheck([...isCheck]);
    }

    const renderPlaylist = (playlists) => {
        return playlists.map(({ name, id }, index) => {
            return <Row key={id} onClick={() => handleClick(index) }>
                <div className="flex items-center">
                    <div className="mr-2 h-8 w-8 flex">
                        <i className="fas fa-compact-disc m-auto text-lg" />
                    </div>
                    <span>{name}</span>
                </div>
                { isCheck[index] ? <i className="fas fa-check text-purple" /> : '' }
            </Row>
        })
    }

    return (
        <Container>
            <div 
                onClick={() => dispatch(closeAddToPlaylistModal())}
                className="overlay"
            />
            <Modal>
                <Header onClick={ () => dispatch(openPlaylistModal()) }>
                    <img className="mr-2 h-8 w-8" src="/images/icons/thumb-add.2971eb21.svg" alt="" />
                    <span>Tạo playlist mới</span>
                </Header>
                <List className="scrollbar">
                    { renderPlaylist(playlists) }
                </List>
            </Modal>
        </Container>
    )
}

export default Index;