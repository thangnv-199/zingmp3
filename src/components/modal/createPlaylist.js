import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import useDispatchs from '../../hooks/useDispatchs';
import { convertTime } from '../../utils';
import storage from '../../utils/storage';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
`;

const Modal = styled.div`
    min-width: 300px;
    margin: auto;
    background-color: var(--layout-bg);
    color: var(--text-primary);
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
    &::placeholder {
        color: var(--text-placeholder);
    }
`;

const CloseIcon = styled.i`
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px;
    color: var(--text-primary); 
    cursor: pointer;
    font-size: 20px;
`;

const ModalButton = styled.button`
    width: 100%;
    margin-top: 20px;
    padding: 8px;
    letter-spacing: 1px;

    &.--disabled {
        pointer-events: none;
        opacity: 0.6;
    }
`;


const Index = () => {

    const { closeCreatePlaylistModal, addPlaylist, updatePlaylist } = useDispatchs();

    const playlistEditing = useSelector(state => state.playlist.editing);
    const [value, setValue] = useState(playlistEditing ? playlistEditing.name : '');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = () => {
        const playlist = storage.getplaylists();
        const id = new Date().getTime().toString(16);
        const newPlaylist = {
            name: value,
            id: id,
            createdAt: convertTime(new Date()),
            songs: [],
        };
        closeCreatePlaylistModal();
        addPlaylist(newPlaylist);
        storage.setplaylists([...playlist, newPlaylist])
    };

    const handleUpdate = (value) => {
        closeCreatePlaylistModal()
        updatePlaylist({
            ...playlistEditing,
            name: value,
        });
    }

    return (
        <Container>
            <Modal>
                <CloseIcon
                    className="fas fa-times"
                    onClick={closeCreatePlaylistModal}
                />
                <h3 className="text-center text-lg font-semibold mb-4">
                    {playlistEditing ? 'Chỉnh sửa Playlist' : 'Tạo playlist mới'}
                </h3>
                <Input
                    onChange={handleChange}
                    value={value}
                    type="text"
                    placeholder="Nhập tên Playlist"
                />

                {playlistEditing
                    ? <ModalButton
                        onClick={() => handleUpdate(value)}
                        className={`button --purple ${value ? '' : '--disabled'}`}
                    >Lưu lại</ModalButton>
                    : <ModalButton
                        onClick={handleSubmit}
                        className={`button --purple ${value ? '' : '--disabled'}`}
                    >Tạo mới</ModalButton>
                }
            </Modal>
        </Container>
    )
}

export default Index;