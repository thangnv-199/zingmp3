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

export const openCreatePlaylistModal = () => ({
    type: types.OPEN_CREATE_PLAYLIST_MODAL,
    payload: null,
});

export const closeCreatePlaylistModal = () => ({
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

export const editPlaylist = (playlist) => ({
    type: types.EDIT_PLAYLIST,
    payload: { playlist },
});

export const updatePlaylist = (newData) => ({
    type: types.UPDATE_PLAYLIST,
    payload: { newData },
});

export const toggleRandomPlay = () => ({
    type: types.TOGGLE_RANDOM_PLAY,
    payload: null,
});

export const addSongToHistory = (data) => ({
    type: types.ADD_SONG_TO_HISTORY,
    payload: { data },
});

export const openLyricModal = (data) => ({
    type: types.OPEN_LYRIC_MODAL,
    payload: { data }
})

export const closeLyricModal = () => ({
    type: types.CLOSE_LYRIC_MODAL,
    payload: null
})

export const openMvModal = (data) => ({
    type: types.OPEN_MV_MODAL,
    payload: { data }
})

export const closeMvModal = () => ({
    type: types.CLOSE_MV_MODAL,
    payload: null
})

export const toggleThemeModal = () => ({
    type: types.TOGGLE_THEME_MODAL,
    payload: null
})

export const openSongTooltip = (data) => ({
    type: types.OPEN_SONG_TOOLTIP,
    payload: { data }
})

export const closeSongTooltip = () => ({
    type: types.CLOSE_SONG_TOOLTIP,
    payload: null
})

export const togglePlayerQueue = () => ({
    type: types.TOGGLE_PLAYER_QUEUE,
    payload: null
})

export const openPlayerQueue = () => ({
    type: types.OPEN_PLAYER_QUEUE,
    payload: null
})

export const closePlayerQueue = () => ({
    type: types.CLOSE_PLAYER_QUEUE,
    payload: null
})

export const openPlaylist = (playlist) => ({
    type: types.OPEN_PLAYLIST,
    payload: {playlist}
})

export const addToLibrary = (data) =>({
    type: types.ADD_TO_LIBRARY,
    payload: { data },
})