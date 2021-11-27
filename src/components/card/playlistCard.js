import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deletePlaylist } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { changeSong, toggleSong } from '../../redux/actions';
import BarAnimation from '../barAnimatiton';

const ImageWrapper = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
    border-radius:5px;
    color: var(--white);
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
    color: #fff;
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
        color: var(--purple-primary);
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
        max-width: 50%;
    }
`;

const Card = ({ name, id, playlist }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isPlaying = useSelector(state => state.songs.isPlaying);
    const currentPlaylist = useSelector(state => state.songs.playlist);
    
    const handleClick = (e) => {
        const _this = e.target;
        if (_this.closest('.delete-button')) {
            const isDelete = window.confirm(`Bạn chắc chắn muốn xóa Playlist này ?`)
            if (isDelete) {
                dispatch(deletePlaylist(id));
            }
        }

        else if (_this.closest('.play-button')) {
            if (!checkSongs()) {
                alert('Chưa có bài hát nào trong playlist này!!!');
                return;
            };
            dispatch(changeSong(playlist.songs[0], playlist));
        }

        else if (_this.closest('.bar-animation')) {
            dispatch(toggleSong())
        }

        else {
            navigate(`/playlist/${id}`);
        }
    }

    const checkSongs = () => {
        return playlist.songs.length !== 0;
    };
    const random = () => {
        return Math.floor(Math.random() * playlist.songs.length);
    }

    return (
        <div>
            <ImageWrapper onClick={ handleClick }>
                { isPlaying && currentPlaylist.id === id
                    ? <div className="overlay --show">
                        <BarWrapper className="bar-animation">
                            <BarAnimation/>
                        </BarWrapper>
                    </div>
                    : <div className="overlay">
                        <i 
                            className="fas fa-times icon-btn delete-button" 
                            title="Xóa playlist"
                        />
                        <PlayIcon className="play-button" src="/images/icons/play.81e7696e.svg" alt="" />
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
                    : <Image src="/images/album_default.png" alt="" />
                }
            </ImageWrapper>
            <div>
                <Title href="#!" title={name}>{name}</Title>
            </div>
        </div>
    )
}

export default Card;