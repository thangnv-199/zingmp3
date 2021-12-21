import * as types from '../../constant/types';
import storage from '../../utils/storage';

const initialState = {
    list: storage.getplaylists(),
    current: {},
    editing: null,
    library: storage.getLibrary() || [],
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.ADD_PLAYLIST : {
            const { newPlaylist } = actions.payload;
            return {
                ...state,
                list: [...state.list, newPlaylist]
            }
        }

        case types.DELETE_PLAYLIST : {
            const { id } = actions.payload;
            const playlist = storage.getplaylists();
            storage.setplaylists(playlist.filter(playlist => playlist.id !== id));
            
            return {
                ...state,
                list: state.list.filter(playlist => playlist.id !== id)
            }
        }

        case types.EDIT_PLAYLIST :
            const { playlist } =actions.payload;
            return {
                ...state,
                editing: playlist,
            }

        case types.UPDATE_PLAYLIST : {
            const { newData } = actions.payload; 
            const index = state.list.findIndex(playlist => playlist.id === newData.id);
            state.list.splice(index, 1, newData);
            storage.setplaylists(state.list);

            return {
                ...state,
                list: [...state.list],
                editing: null,
            }
        }

        case types.ADD_TO_LIBRARY : {
            const { data } = actions.payload;
            return {
                ...state,
                library: {
                    ...state.library,
                    songs: [...state.library.songs, data],
                }
            }
        }

        default:
            return state;
    };
};

export default reducer;