import * as types from '../../constant/types';

const initialState = {
    isOpenCreatePlaylistModal: false,
    isOpenLyricModal: false,
    isOpenMvModal: false,
    isOpenThemeModal: false,
    isOpenSongTooltipModal: false,
    isOpenPlayerQueue: false,
    songTooltipData: null,
    songLyric: null,
    songVideo: null,
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.OPEN_CREATE_PLAYLIST_MODAL :
            return {
                ...state,
                isOpenCreatePlaylistModal: true,
            }

        case types.CLOSE_CREATE_PLAYLIST_MODAL :
            return {
                ...state,
                isOpenCreatePlaylistModal: false,
            }

        case types.OPEN_LYRIC_MODAL : {
            const { data } = actions.payload;
            return {
                ...state,
                songLyric: data,
                isOpenLyricModal: true,
                isOpenMvModal: false,
            }
        }

        case types.CLOSE_LYRIC_MODAL : {
            return {
                ...state,
                isOpenLyricModal: false,
            }
        }

        case types.OPEN_MV_MODAL : {
            const { data } = actions.payload;
            return {
                ...state,
                songVideo: data,
                isOpenLyricModal: false,
                isOpenMvModal: true,
            }
        }

        case types.CLOSE_MV_MODAL : {
            return {
                ...state,
                isOpenMvModal: false,
            }
        }

        case types.TOGGLE_THEME_MODAL : {
            return {
                ...state,
                isOpenThemeModal: !state.isOpenThemeModal,
            }
        }

        case types.OPEN_SONG_TOOLTIP : {
            const { data } = actions.payload;
            return {
                ...state,
                isOpenSongTooltipModal: true,
                songTooltipData: data,
            }
        }

        case types.CLOSE_SONG_TOOLTIP : {
            return {
                ...state,
                isOpenSongTooltipModal: false,
                songTooltipData: null,
            }
        }

        case types.TOGGLE_PLAYER_QUEUE : {
            return {
                ...state,
                isOpenPlayerQueue: !state.isOpenPlayerQueue,
            }
        }

        case types.OPEN_PLAYER_QUEUE : {
            return {
                ...state,
                isOpenPlayerQueue: true,
            }
        }

        case types.CLOSE_PLAYER_QUEUE : {
            return {
                ...state,
                isOpenPlayerQueue: false,
            }
        }
  
        default:
            return state;
    };
};

export default reducer;