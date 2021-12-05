import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLayoutEffect, useState } from 'react';

import useDispatchs from '../../hooks/useDispatchs';
import useClickOutSide from '../../hooks/useClickOutSide';
import AddToPlaylist from './addToPlaylist';


const ContainerStyled = styled.div`
    position: fixed;
    width: 280px;
    background-color: var(--primary-bg);
    left: ${props => props.x - 280 - 10}px;
    top: ${props => props.y + 10}px;
    border-radius: 8px;
    z-index: 999;
`;

const ItemStyled = styled.div`
    padding: 10px 15px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--nav-text);
    cursor: pointer;
    position: relative;

    &:hover {
        background-color: var(--alpha-bg);
        .dkm {
            display: block;
        }
    }
`;

const Tooltip = () => {

    const {
        changeSong,
        closeSongTooltip,
        openLyricModal,
        openMvModal,
        toggleSong
    } = useDispatchs();
    const isPlaying = useSelector(state => state.songs.isPlaying);
    const currentSong = useSelector(state => state.songs.current);
    const { position, song, playlist } = useSelector(state => state.modal.songTooltipData);
    const [posY, setPosY] = useState(position.y);

    const ref = useClickOutSide((isCheck) => {
        if (!isCheck) {
            closeSongTooltip();
        }
    });

    useLayoutEffect(() => {
        if (position.y > window.innerHeight / 2) {
            position.y -= (ref.current.offsetHeight + 20);
            setPosY(position.y);
        }

    }, [position, ref])

    const handlePlay = (e) => {
        e.stopPropagation();
        checkSongPlaying()
            ? toggleSong()
            : changeSong(song, playlist);
    }

    const handleOpenLyricModal = (e) => {
        e.stopPropagation();
        openLyricModal(song)
    }

    const handleOpenMvModal = (e) => {
        e.stopPropagation();
        openMvModal(song)
    }

    const checkSongPlaying = () => isPlaying && song.id === currentSong.id;

    return (
        <ContainerStyled y={posY} x={position.x} ref={ref}>
            <header className="flex items-center gap-3 p-4 pb-2">
                <div>
                    <img className="w-10 h-10"
                        src={song.image}
                        alt=""
                    />
                </div>
                <div>
                    <p className="text-primary">{song.name}</p>
                    <p className="text-secondary">{song.artist}</p>
                </div>
            </header>
            <div>
                <ul>
                    <li onClick={handlePlay}>
                        <ItemStyled>
                            {checkSongPlaying()
                                ? <>
                                    <i className="fas fa-pause"></i>
                                    <span>Tạm dừng</span>
                                </>
                                : <>
                                    <i className="fas fa-play"></i>
                                    <span>Phát</span>
                                </>
                            }

                        </ItemStyled>
                    </li>
                    <li>
                        <ItemStyled>
                            <div className="flex gap-3 items-center">
                                <i className="fas fa-plus"></i>
                                <span>Thêm vào playlist</span>
                            </div>
                            <i className="fas fa-chevron-right ml-auto"></i>
                            <AddToPlaylist/>
                        </ItemStyled>
                    </li>
                    <li onClick={handleOpenLyricModal}>
                        <ItemStyled>
                            <i className="far fa-list-alt"></i>
                            <span>Xem lời bài hát</span>
                        </ItemStyled>
                    </li>
                    <li onClick={handleOpenMvModal}>
                        <ItemStyled>
                            <i className="fas fa-film"></i>
                            <span>Xem MV</span>
                        </ItemStyled>
                    </li>
                </ul>
            </div>
        </ContainerStyled>
    )
}

export default Tooltip;