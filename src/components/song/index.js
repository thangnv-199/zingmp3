import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect, useCallback } from 'react';
import { 
    toggleSong, 
    changeSong, 
    openAddToPlaylistModal 
} from '../../redux/actions';
import { storage, convertDuration } from '../../utils';
import BarAnimation from '../barAnimatiton';
import * as storageKey from '../../constant/storage';

const Container = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr 3fr;
    cursor: pointer;
    color: var(--text-secondary);
    font-size: 14px;
    padding: 8px;
    user-select: none;
    position: relative;
    border-radius: 4px;
    border-bottom: 1px solid var(--border-secondary);

    .song-label {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
    }

    &:hover, &.--active {
        .song-image-overlay {
            display: flex;
        }
    }

    &.--active {
        background-color: var(--purple-primary);
        .playlist-name {
            color: var(--text-primary);
        }
    }

    &:hover {
        background-color: var(--alpha-bg);
    }

`;

const Action = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .mv-icon {
        filter: invert(0.6);
        padding: 6px;
        border-radius: unset;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    i {
        margin: auto;
        color: #fff;
    }

    &:hover {
        i {
            opacity: 0.6;
        }
    }
`;

const Name = styled.div`
    font-size: 14px;
    color: var(--text-primary);
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    text-transform: capitalize;
    font-weight: 500;
`;

const Artists = styled.a`
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
`;

const TopLabel = styled.span`
    font-size: 32px;
    font-weight: 900;
    line-height: 1;
    margin-right: 5px;
    min-width: 38px;
    width: 60px;
    opacity: 1;
    white-space: nowrap;
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    color: rgba(74,144,226,0);
    -webkit-text-stroke: 1px ${
        props => props.color > 3 
            ? 'var(--text-primary)'
            : props.color === 1 
                ? '#4a90e2'
                : props.color === 2
                    ? '#50e3c2' 
                    : '#e35050' 
    };
`;

const Song = ({ data, playlist, label, index }) => {
    const dispatch = useDispatch();

    const songRef = useRef();
    const currentPlaylist = useSelector(state => state.songs.playlist);
    const currentSong = useSelector(state => state.songs.current);
    const isPlaying = useSelector(state => state.songs.isPlaying);
    const { image, name, singer, id, duration } = data;
    
    const checkSongPlaying = useCallback(() => {
        return currentSong.id === id && playlist.id === currentPlaylist.id;
    }, [currentSong.id, id, playlist.id, currentPlaylist.id])

    const handleClick = (e) => {
        const _this = e.target;
        if (_this.closest('.add-to-playlist')){
            dispatch(openAddToPlaylistModal());
            storage.set(storageKey.TEMP, data);
        }
        else if (_this.closest('.remove-in-playlist')){
            
        }
        else if (_this.closest('.view-lyric')) {
            
        }
        else {
            if (checkSongPlaying()) {
                dispatch(toggleSong())
            } else {
                dispatch(changeSong(data, playlist))
            }
        }
    }

    useEffect(() =>{
        checkSongPlaying() && songRef.current.scrollIntoView({
            behavior: "smooth", 
            block: "center", 
            inline: "nearest"
        })
    }, [checkSongPlaying])

    return (
        <Container 
            onClick={ handleClick }
            className={ checkSongPlaying() ? '--active song' : 'song' }
            ref={ songRef }
        >
            <div className="flex items-center">
                { ++index
                    ? <TopLabel color={index}>{index}</TopLabel>
                    : <i className="fas fa-music icon-btn song-icon"></i>
                }
                
                <div className="mr-3 relative flex-shrink-0">
                    <Overlay className="song-image-overlay">
                        { isPlaying && checkSongPlaying()
                            ? <BarAnimation />
                            : <i className="fas fa-play"></i>
                        }
                    </Overlay>
                    <img className="w-10 h-10" src={ image } alt="" />
                </div>
                <div className="text-left">
                    <Name>{ name }</Name>
                   <Artists>
                   {singer.split(',').map((singer, index) => (
                        <a className="capitalize hover:text-purple text-secondary" key={index} href="#!">
                            { index === 0 ? '' : ',' } {singer} 
                        </a>
                    ))}
                   </Artists>
                </div>
            </div>
            <div className="song-label">
                { label === 'duration' ? convertDuration(duration) : ''}
                { label === 'playlist'
                    ? <p className="text-center">
                        <span className="text-primary text-xs block">Playlist</span>
                        <span className="text-purple-light playlist-name block">{playlist.name}</span>
                     </p>
                    : ''
                }
                { label === 'listened'
                    ? <p className="text-center">
                        <span className="text-primary text-xs block whitespace-nowrap">Đã nghe</span>
                        <span className="text-purple-light playlist-name block text-base">{data.listened}</span>
                     </p>
                    : ''
                }
            </div>
            <Action className="song-action">
                <div title="Xem MV" className="flex-shrink-0">
                    <img className="icon-btn mv-icon" src="/images/icons/mv-icon.png" alt="" />
                </div>
                <div title="Xem lời bài hát">
                    <label htmlFor="song-lyric-checkbox" className="cursor-pointer">
                        <i className="far fa-list-alt icon-btn view-lyric"></i>
                    </label>
                </div>
                <div title="Thêm vào playlist">
                    <i className="fas fa-plus icon-btn add-to-playlist"></i>
                </div>
            </Action>
            
        </Container>
    )

}

export default Song;