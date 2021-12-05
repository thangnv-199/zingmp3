import styled from "styled-components";
import { useSelector } from 'react-redux';
import MvModal from './mvModal';
import LyricModal from './lyricModal'
import CreatePlaylistModal from './createPlaylist';
import ThemeModal from "./theme";
import SongTooltipModal from "./songTooltip";
import PlayerQueue from '../playerQueue';
import { slideInBottom, slideOutBottom, slideOutToRight, slideInToRight } from '../../utils/keyframes';

const PlayerQueueWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: var(--control-height);
    width: var(--player-queue-width);
    background-color: var(--player-queue-bg);
    z-index: 99;
    transform: translateX(100%);
    animation: ${props => props.isOpen ? slideInToRight : slideOutToRight} 0.5s ease-out forwards;
`;

const ModalContainer = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: var(--layout-bg);
    z-index: ${props => props.isOpen ? props.zIndex : '0'};
    transition: all 0.4s linear;
    overflow: hidden;
    top: 0;
    tranform: translateY(100%);
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};;
    animation: ${props => props.isOpen ? slideInBottom : slideOutBottom} 0.4s linear forwards;
`;

const Modal = () => {

    const isOpenMvModal = useSelector(state => state.modal.isOpenMvModal);
    const isOpenLyricModal = useSelector(state => state.modal.isOpenLyricModal);
    const isOpenCreatePlaylistModal = useSelector(state => state.modal.isOpenCreatePlaylistModal);
    const isOpenThemeModal = useSelector(state => state.modal.isOpenThemeModal);
    const isOpenSongTooltipModal = useSelector(state => state.modal.isOpenSongTooltipModal);
    const isOpenPlayerQueue = useSelector(state => state.modal.isOpenPlayerQueue);
   
    return (
        <div>
            <PlayerQueueWrapper isOpen={isOpenPlayerQueue}>
                {isOpenPlayerQueue && <PlayerQueue />}
            </PlayerQueueWrapper>

            <ModalContainer isOpen={isOpenMvModal} zIndex={1000}>
                {isOpenMvModal && <MvModal />}
            </ModalContainer>

            <ModalContainer isOpen={isOpenLyricModal} zIndex={99}>
                {isOpenLyricModal && <LyricModal/>}
            </ModalContainer>

            {isOpenThemeModal && <ThemeModal/>}
            {isOpenCreatePlaylistModal && <CreatePlaylistModal />}
            {isOpenSongTooltipModal && <SongTooltipModal />}
        </div>
    )
}

export default Modal;