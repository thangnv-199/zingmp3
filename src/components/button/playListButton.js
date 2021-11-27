import { useDispatch, useSelector } from 'react-redux';
import { changeSong } from '../../redux/actions';

const Button = ({ playlist }) => {

    const dispatch = useDispatch();
    const isRandom = useSelector(state => state.songs.random);

    const handlePlay = () => {
        const index = isRandom ? Math.floor(Math.random() * playlist.songs.length) : 0;
        dispatch(changeSong(playlist.songs[index], playlist));
    }

    return (
        <button onClick={ handlePlay } className="button --purple">
            <i className="fas fa-play"></i>
            { isRandom ? 'Phát ngẫu nhiên' : 'Phát tất cả' }
        </button>
    );
}

export default Button;