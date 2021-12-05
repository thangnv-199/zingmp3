import useDispatchs from '../../hooks/useDispatchs';

const MoreButton = ({ song, playlist }) => {

    const { openSongTooltip } = useDispatchs();

    const handleClick = (e) => {
        e.stopPropagation();
        openSongTooltip({
            song, playlist,
            position: { y: e.pageY, x: e.pageX},
        });
    }

    return (
        <button onClick={ handleClick } className="more-icon" title="Khác">
            <i className="fas fa-ellipsis-h icon-btn"></i>
        </button>
    )
}

export default MoreButton;