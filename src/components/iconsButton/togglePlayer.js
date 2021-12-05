import styled from "styled-components";
import { useSelector } from 'react-redux';
import useDispatchs from '../../hooks/useDispatchs';

const Button = styled.button`
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    display: block;
    transition: background 0.1s linear;

    &:hover {
        background-color: var(--alpha-bg);
    }

    img {
        width: 100%;
        height: 100%;
    }
    .icon-unplaying {
        filter: invert(1);
        &.--active {
            background-color: var(--purple-primary);
        }
    }
    .gif-playing {
        filter: hue-rotate(45deg);
        object-fit: cover;
    }
`;

const TogglePlayerQueueButton = () => {

    const { togglePlayerQueue } = useDispatchs();
    const isPlaying = useSelector(state => state.songs.isPlaying);
    const isOpen = useSelector(state => state.modal.isOpenPlayerQueue);

    return (
        <div>
            <Button onClick={ togglePlayerQueue } title="Danh sách phát">
                {isPlaying
                    ? <img
                        className="gif-playing"
                        src="/zingmp3/images/icons/music-note-icon-dribbble.gif" alt=""
                    />
                    : <img
                        className={`icon-unplaying p-1 ${isOpen ? '--active' : ''}`}
                        src="/zingmp3/images/icons/playlist-3749298-3125483.png" alt=""
                    />
                }
            </Button>
        </div>
    )
}

export default TogglePlayerQueueButton;