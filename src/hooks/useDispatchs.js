import { useDispatch } from "react-redux";
import * as action from '../redux/actions';

const Dispatchs = () => {
    const dispatch = useDispatch();
    return {
        openPlaylist: playlist => dispatch(action.openPlaylist(playlist)),
        toggleSong: () => dispatch(action.toggleSong()),
        changeSong: (song, playlist) => dispatch(action.changeSong(song, playlist)),
        songLoaded: () => dispatch(action.songLoaded()),
        addSongToHistory: (data) => dispatch(action.addSongToHistory(data)),
        nextSong: () => dispatch(action.nextSong()),
        prevSong: () => dispatch(action.prevSong()),
        toggleRandomPlay: () => dispatch(action.toggleRandomPlay()),

        deletePlaylist: id => dispatch(action.deletePlaylist(id)),
        addPlaylist: data => dispatch(action.addPlaylist(data)),
        updatePlaylist: data => dispatch(action.updatePlaylist(data)),
        
        toggleThemeModal: () => dispatch(action.toggleThemeModal()),
        openLyricModal: data => dispatch(action.openLyricModal(data)),
        openSongTooltip: data => dispatch(action.openSongTooltip(data)),
        openMvModal: data => dispatch(action.openMvModal(data)),
        togglePlayerQueue: () => dispatch(action.togglePlayerQueue()),
        openCreatePlaylistModal: () => dispatch(action.openCreatePlaylistModal()),
        closeCreatePlaylistModal: () => dispatch(action.closeCreatePlaylistModal()),
        closeLyricModal: () => dispatch(action.closeLyricModal()),
        closeMvModal: () => dispatch(action.closeMvModal()),
        closeSongTooltip: () => dispatch(action.closeSongTooltip()),
        addToLibrary: data => dispatch(action.addToLibrary(data)),
    }
}

export default Dispatchs;