import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { closePlaylistModal, addPlaylist, updatePlaylist } from '../../redux/actions';
import { storage, convertTime } from '../../utils';
import * as storageKey from '../../constant/storage';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
`;

const Modal = styled.div`
    min-width: 300px;
    margin: auto;
    background-color: var(--layout-bg);
    color: var(--white);
    padding: 20px;
    position: relative;
    border-radius: 8px;
`;  

const Input = styled.input`
    height: 40px;
    width: 100%;
    border-radius: 999px;
    border: 1px solid var(--alpha-bg);
    background-color: var(--alpha-bg);
    padding: 0 15px;
    font-size: 14px;
`;

const CloseIcon = styled.i`
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px;
    color: var(--white); 
    cursor: pointer;
    font-size: 20px;
`;

const ModalButton = styled.button`
    width: 100%;
    margin-top: 20px;

    &.--disabled {
        pointer-events: none;
        opacity: 0.6;
    }
`;


const Index = () => {

    const dispatch = useDispatch();

    const playlistEditing = useSelector(state => state.playlist.editing);
    const [value, setValue] = useState(playlistEditing ? playlistEditing.name : '');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = () => {
        const playlist = storage.get(storageKey.PLAYLISTS) || [];
        const id = new Date().getTime().toString(16);
        const newPlaylist = {
            name: value,
            id: id,
            createdAt: convertTime(new Date()),
            songs: [],
        };
        dispatch(addPlaylist(newPlaylist));
        storage.set(storageKey.PLAYLISTS, [...playlist, newPlaylist])
    };

    const handleUpdate = (value) => {
        dispatch(updatePlaylist({
            ...playlistEditing,
            name: value,
        }));
    }

    const handleCloseModal = () => {
        dispatch(closePlaylistModal());
    }

    return (
        <Container>
            <Modal>
                <CloseIcon 
                    className="fas fa-times"
                    onClick={handleCloseModal}
                />
                <h3 className="text-center text-lg font-semibold mb-4">
                    { playlistEditing ? 'Chỉnh sửa Playlist' : 'Tạo playlist mới' } 
                </h3>
                <Input 
                    onChange={ handleChange }
                    value={value} 
                    type="text" 
                    placeholder="Nhập tên Playlist"
                />

                { playlistEditing
                    ? <ModalButton 
                            onClick={() => handleUpdate(value) }
                            className={`button --purple ${value ? '' : '--disabled'}`}
                        >Lưu lại</ModalButton>
                    : <ModalButton 
                            onClick={ handleSubmit }
                            className={`button --purple ${value ? '' : '--disabled'}`}
                        >Tạo mới</ModalButton>
                }
            </Modal>
        </Container>
    )
}

export default Index;