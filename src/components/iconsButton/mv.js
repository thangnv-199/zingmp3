import useDispatchs from '../../hooks/useDispatchs';

const MvButton = ({ song }) => {

    const { openMvModal } = useDispatchs();
    const handleClick = (e) => {
        e.stopPropagation();
        openMvModal(song)
    }

    return (
        <button onClick={handleClick} className="mv-icon" title="Xem MV">
            <i className="fas fa-film icon-btn"></i>
        </button>
    )
}

export default MvButton;