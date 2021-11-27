import * as types from '../../constant/types';
import { storage } from '../../utils';
import * as storageKey from '../../constant/storage';

const initialState = {
    list: storage.get(storageKey.PLAYLISTS) || [],
    current: {},
    editing: null,
    isOpenCreateModel: false,
    isOpenAddToModel: false,
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.OPEN_CREATE_PLAYLIST_MODAL :
            return {
                ...state,
                isOpenCreateModel: true,
            }

        case types.CLOSE_CREATE_PLAYLIST_MODAL :
            return {
                ...state,
                isOpenCreateModel: false,
                editing: null,
            }

        case types.ADD_PLAYLIST : {
            const { newPlaylist } = actions.payload;
            return {
                ...state,
                isOpenCreateModel: false,
                list: [...state.list, newPlaylist]
            }
        }

        case types.DELETE_PLAYLIST : {
            const { id } = actions.payload;
            const playlist = storage.get(storageKey.PLAYLISTS);
            storage.set(storageKey.PLAYLISTS, playlist.filter(playlist => playlist.id !== id));
            
            return {
                ...state,
                list: state.list.filter(playlist => playlist.id !== id)
            }
        }

        case types.EDIT_PLAYLIST :
            return {
                ...state,
                isOpenCreateModel: true,
                editing: state.list.find(playlist => playlist.id === actions.payload.id),
            }

        case types.UPDATE_PLAYLIST : {
            const { newData } = actions.payload; 
            const index = state.list.findIndex(playlist => playlist.id === newData.id);
            state.list.splice(index, 1, newData);
            storage.set(storageKey.PLAYLISTS, state.list);

            return {
                ...state,
                list: [...state.list],
                isOpenCreateModel: false,
                editing: null,
            }
        }

        case types.OPEN_ADD_TO_PLAYLIST_MODAL :
            return {
                ...state,
                isOpenAddToModel: true,
            }

        case types.CLOSE_ADD_TO_PLAYLIST_MODAL :
            storage.remove(storageKey.TEMP);
            return {
                ...state,
                isOpenAddToModel: false,
            }

        // case types.ADD_TO_PLAYLIST: 
        //     const song = storage.get(storageKey.TEMP);
        //     index = state.list.findIndex(playlist => playlist.id === actions.payload.id);
        //     state.list[index].songs.push(song);
        //     storage.set(storageKey.PLAYLISTS, state.list);

        //     return {
        //         ...state,
        //         list: [...state.list]
        //     }
  
        default:
            return state;
    };
};

export default reducer;