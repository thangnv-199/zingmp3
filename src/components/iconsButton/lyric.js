import useDispatchs from '../../hooks/useDispatchs';

const LyricButton = ({ song }) => {

    const { openLyricModal } = useDispatchs();

    const handleClick = (e) => {
        e.stopPropagation();
        openLyricModal(song);
    }

    return (
        <button className="lyric-icon" onClick={handleClick} title="Xem lời bài hát">
            <i className="far fa-list-alt icon-btn view-lyric"></i>
        </button>
    )
}

export default LyricButton;