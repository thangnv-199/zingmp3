import * as types from '../../constant/types';

export const songLoaded = (id) => ({
    type: types.SONG_LOADED,
    payload: null
});

export const changeSong = (song, playlist) => ({
    type: types.CHANGE_SONG,
    payload: { song, playlist }
});

export const toggleSong = () => ({
    type: types.TOGGLE_SONG,
    payload: null,
});

export const prevSong = () => ({
    type: types.PREV_SONG,
    payload: null,
});


export const nextSong = () => ({
    type: types.NEXT_SONG,
    payload: null,
});

export const openPlaylistModal = () => ({
    type: types.OPEN_CREATE_PLAYLIST_MODAL,
    payload: null,
});

export const closePlaylistModal = () => ({
    type: types.CLOSE_CREATE_PLAYLIST_MODAL,
    payload: null,
});

export const addPlaylist = (newPlaylist) => ({
    type: types.ADD_PLAYLIST,
    payload: { newPlaylist },
});

export const deletePlaylist = (id) => ({
    type: types.DELETE_PLAYLIST,
    payload: { id },
});

export const editPlaylist = (id) => ({
    type: types.EDIT_PLAYLIST,
    payload: { id },
});

export const updatePlaylist = (newData) => ({
    type: types.UPDATE_PLAYLIST,
    payload: { newData },
});

export const openAddToPlaylistModal = () => ({
    type: types.OPEN_ADD_TO_PLAYLIST_MODAL,
    payload: null,
});

export const closeAddToPlaylistModal = () => ({
    type: types.CLOSE_ADD_TO_PLAYLIST_MODAL,
    payload: null,
});

export const toggleRandomPlay = () => ({
    type: types.TOGGLE_RANDOM_PLAY,
    payload: null,
});

export const addSongToHistory = (data) => ({
    type: types.ADD_SONG_TO_HISTORY,
    payload: { data },
});