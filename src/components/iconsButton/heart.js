import styled from 'styled-components';
import { useState } from 'react';
import storage from '../../utils/storage';
import useDispatchs from '../../hooks/useDispatchs';
import { useSelector } from 'react-redux';

const Icon = styled.i`
    color: var(--text-secondary);
    &.--active {
        color: var(--purple-primary);
    }
`;

const HeartIcon = ({ data }) => {

    const { addToLibrary } = useDispatchs();

    const library = useSelector(state => state.playlist.library);
    let isInLibrary = library.songs.findIndex(song => song.id === data.id) !== -1;
    let title = isInLibrary ? 'Xóa khỏi thư viện' : 'Thêm vào thư viện';
    const [dkm, setDkm] = useState(isInLibrary);

    const handleClick = (e) => {
        e.stopPropagation();
        isInLibrary ? handleRemove() : handleAdd();
        e.target.classList.toggle('--active');
        isInLibrary = !isInLibrary;
        setDkm(!dkm);
    }

    const handleRemove = () => {
        const position = library.songs.findIndex(song => song.id === data.id);
        library.songs.splice(position, 1);
        storage.setLibrary(library);
    }

    const handleAdd = () => {
        storage.setLibrary({
            ...library,
            songs: [...library.songs, data]
        });

        addToLibrary(data);
    }

    return (
        <div className="heart-icon">
           <button onClick={ handleClick } title={title}>
                <Icon className={`fas fa-heart icon-btn ${isInLibrary ? '--active' : ''}`}></Icon>
            </button>
        </div>
    )
}

export default HeartIcon;