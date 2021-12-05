import Swal from 'sweetalert2';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useDispatchs from '../../hooks/useDispatchs';
import BarAnimation from '../barAnimatiton';

const ImageWrapper = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
    border-radius:5px;
    color: var(--text-primary);
    cursor: pointer;
    user-select: none;

    .overlay {
       display: flex;
       align-items: center;
       justify-content: center;
    }
    &:hover {
        .overlay {
            opacity: 1;
            visibility: visible;
        }
        img {
            transition: all 0.2s linear;
            transform: scale(1.1);
        }
    }
`;

const Title = styled.a`
    color: var(--white);
    font-weight: bold;
    display:-webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    font-size: 14px;
    text-transform: capitalize;
    margin-bottom: 5px;

    &:hover {
        color: var(--link-text-hover);
    }
`;

const PlayIcon = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    border: 1px solid var(--white);
    margin: 0 10px;

    &:hover {
        opacity: 0.6;
    }
`;

const BarWrapper = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    border: 1px solid var(--white);
    margin: 0 10px;

    &:hover {
        opacity: 0.6;
    }
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;

const ImageGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & > * {
        width: 50%;
    }
`;

const Card = ({ name, id, playlist }) => {

    const navigate = useNavigate();
    const { toggleSong, openPlaylist, deletePlaylist } = useDispatchs();
    const isPlaying = useSelector(state => state.songs.isPlaying);
    const currentPlaylist = useSelector(state => state.songs.playlist);

    const handleDelete = (e) => {
        e.stopPropagation();
        Swal.fire({
            position: 'top',
            icon: 'warning',
            text: 'Bạn chắc chắn muốn xóa Playlist này ?',
            confirmButtonColor: 'var(--purple-primary)',
            confirmButtonText: 'Xác nhận',
        })
        .then(result => {
            if (result.isConfirmed) {
                deletePlaylist(id);
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    timer: 1000,
                })
            }
        })
    }

    const handlePlay = (e) => {
        e.stopPropagation();
        if (!checkSongs()) {
            alert('Chưa có bài hát nào trong playlist này!!!');
            return;
        };
        openPlaylist(playlist);
    }

    const checkSongs = () => {
        return playlist.songs.length !== 0;
    };
    const random = () => {
        return Math.floor(Math.random() * playlist.songs.length);
    }

    return (
        <div>
            <ImageWrapper onClick={ () => navigate(`/playlist/${id}`) }>
                { isPlaying && currentPlaylist.id === id
                    ? <div className="overlay --show">
                        <BarWrapper onClick={ (e) => {
                            e.stopPropagation();
                            toggleSong()
                        } }>
                            <BarAnimation/>
                        </BarWrapper>
                    </div>
                    : <div className="overlay">
                        <i onClick={ handleDelete }
                            className="fas fa-times icon-btn delete-button" 
                            title="Xóa playlist"
                        />
                        <PlayIcon onClick={ handlePlay }
                            className="play-button" 
                            src="/zingmp3/images/icons/play.81e7696e.svg" alt="" 
                        />
                        <i className="fas fa-ellipsis-h icon-btn"></i>
                    </div>
                
                }
                {checkSongs() 
                    ? <ImageGroup>
                        <img src={playlist.songs[random()].image} alt="" />
                        <img src={playlist.songs[random()].image} alt="" />
                        <img src={playlist.songs[random()].image} alt="" />
                        <img src={playlist.songs[random()].image} alt="" />
                    </ImageGroup>
                    : <Image src="/zingmp3/images/album_default.png" alt="" />
                }
            </ImageWrapper>
            <div>
                <Title href="#!" title={name}>{name}</Title>
            </div>
        </div>
    )
}

export default Card;