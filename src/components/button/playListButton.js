import { useSelector } from 'react-redux';
import useDispatchs from '../../hooks/useDispatchs';

const Button = ({ playlist }) => {

    const { toggleSong, openPlaylist} = useDispatchs();
    const isRandom = useSelector(state => state.songs.random);
    const currentPlaylist = useSelector(state => state.songs.playlist);
    const isPlaying = useSelector(state => state.songs.isPlaying);

    const isCheckPlaylistPlaying = () => {
        return currentPlaylist.id === playlist.id && isPlaying;
    }
    const handlePlay = () => {
        isCheckPlaylistPlaying()
        ? toggleSong()
        : openPlaylist(playlist)
    }

    return (
        <button onClick={ handlePlay } className="button --purple">
            { !isCheckPlaylistPlaying()
                ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            }
            <span>
                { isCheckPlaylistPlaying()
                    ? 'Tạm dừng'
                    : isRandom ? 'Phát ngẫu nhiên' : 'Phát tất cả' 
                }
            </span>
        </button>
    );
}

export default Button;