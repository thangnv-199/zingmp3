import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useRef, useCallback } from 'react';

import BarAnimation from '../barAnimatiton';
import MvButton from '../iconsButton/mv';
import LyricButton from '../iconsButton/lyric';
import HeartButton from '../iconsButton/heart';
import MoreButton from '../iconsButton/more';
import { convertDuration } from '../../utils';
import useDispatchs from '../../hooks/useDispatchs';

const ContainerStyled = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    color: var(--text-secondary);
    font-size: 14px;
    padding: 8px;
    user-select: none;
    position: relative;
    border-radius: 4px;
    border-bottom: 1px solid var(--border-secondary);

    .song {
        &-actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        &-label {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
    }
    
    .lyric-icon, .mv-icon, .more-icon {
        display: none;
    }

    &:hover, &.--active {
        background-color: var(--alpha-bg);
        .song-image-overlayStyled {
            display: flex;
        }
    }

    &:hover {
        .song-duration {
            display: none;
        }
        .lyric-icon, .mv-icon, .more-icon {
            display: block;
        }
    }

    @media (max-width: 1023px) {
        .lyric-icon, .mv-icon {
            display: none !important;
        }
        .more-icon {
            display: block;
        }
        &:hover {
            .song-duration {
                display: block;
            }
        }
    }
    @media (max-width: 767px) {
        display: flex;
        .song-album {
            display: none;
        }
        .song-actions {
            margin-left: auto;
        }
    }
`;

const OverlayStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    i {
        margin: auto;
        color: var(--white);
    }

    &:hover {
        i {
            opacity: 0.6;
        }
    }
`;

const NameStyled = styled.div`
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

const ArtistsStyled = styled.div`
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;

    a:hover {
        color: var(--link-text-hover);
        text-decoration: underline;
    }
`;

const TopLabelStyled = styled.div`
    font-size: 32px;
    font-weight: bold;
    min-width: 40px;
    text-align: center;
    white-space: nowrap;
    color: rgba(74,144,226,0);
    -webkit-text-stroke: 1px ${props => props.color > 3
        ? 'var(--text-primary)'
        : props.color === 1
            ? '#4a90e2'
            : props.color === 2
                ? '#50e3c2'
                : '#e35050'
    };
`;

const Song = ({ data, playlist, index }) => {
    const { toggleSong, changeSong } = useDispatchs();

    const songRef = useRef();
    const currentPlaylist = useSelector(state => state.songs.playlist);
    const currentSong = useSelector(state => state.songs.current);
    const isPlaying = useSelector(state => state.songs.isPlaying);
    const { image, name, artist, id, duration, album } = data;

    const checkSongPlaying = useCallback(() => {
        return currentSong.id === id && playlist.id === currentPlaylist.id;
    }, [currentSong.id, id, playlist.id, currentPlaylist.id])

    const handleClick = () => {
        checkSongPlaying()
        ? toggleSong()
        : changeSong(data, playlist)
    }

    // useEffect(() => {
    //     checkSongPlaying() && songRef.current.scrollIntoView({
    //         behavior: "smooth",
    //         block: "center",
    //         inline: "nearest"
    //     })
    // }, [checkSongPlaying])

    return (
        <ContainerStyled ref={songRef}
            onClick={handleClick}
            className={checkSongPlaying() ? '--active song' : 'song'}
        >
            <div className="flex items-center">
                {++index
                    ? <TopLabelStyled color={index}>{index}</TopLabelStyled>
                    : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1 music-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                }

                <div className="mr-3 relative flex-shrink-0">
                    <OverlayStyled className="song-image-overlayStyled">
                        {isPlaying && checkSongPlaying()
                            ? <BarAnimation />
                            : <i className="fas fa-play"></i>
                        }
                    </OverlayStyled>
                    <img className="w-10 h-10" src={image} alt="" />
                </div>
                <div className="text-left">
                    <NameStyled title={name}>{name}</NameStyled>
                    <ArtistsStyled>
                        {artist.split(',').map((item, index) => (
                            <a className="capitalize text-secondary" key={index} href="#!">
                                {index === 0 ? '' : ','} {item}
                            </a>
                        ))}
                    </ArtistsStyled>
                </div>
            </div>
            <div className="song-album text-xs">
                <p className="text-truncate"> {album || ''} </p>
            </div>
            <div className="song-actions">
                <MvButton song={data} />
                <LyricButton song={data} />
                <HeartButton data={data} />
                <div className="w-10 song-duration">{convertDuration(duration)}</div>
                <MoreButton song={data} playlist={playlist} />
            </div>
        </ContainerStyled>
    )

}

export default Song;