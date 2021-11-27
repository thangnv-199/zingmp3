import {zingChart} from '../../data/zingChart';

import * as types from '../../constant/types';
import { storage } from '../../utils';
import * as storageKey from '../../constant/storage';

const playlistData = storage.get(storageKey.CURRENT_PLAYLIST);
const playlistDefaultData = storage.get(storageKey.CURRENT_PLAYLIST_DEFAULT)
const currentSongIndex = storage.get(storageKey.CURRENT_SONG);
const history = storage.get(storageKey.HISTORY);

playlistData || storage.set(storageKey.CURRENT_PLAYLIST, zingChart);
playlistDefaultData || storage.set(storageKey.CURRENT_PLAYLIST_DEFAULT, zingChart);
currentSongIndex || storage.set(storageKey.CURRENT_SONG, 0);
history || storage.set(storageKey.HISTORY, []);

const initialState = {
    isPlaying: false,
    isLoaded: false,
    random: storage.get(storageKey.RANDOM) || false,
    history: history || [],
    playlist: playlistData || {...zingChart},
    playlistDefault: playlistDefaultData || {...zingChart},
    current: playlistData ? playlistData.songs[currentSongIndex] : zingChart.songs[0],
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.SONG_LOADED :
            return {
                ...state,
                isLoaded: true,
            }

        case types.CHANGE_SONG : {

            let { song, playlist } = actions.payload;
            const playlistClone = { ...playlist }
            const isRandom = storage.get(storageKey.RANDOM);

            if (isRandom) {
                playlistClone.songs = [
                    song, 
                    ...playlistClone.songs.filter(s => s.id !== song.id).sort(() =>
                        0.5 - Math.random()
                    )
                ]
            } 

            storage.set(storageKey.CURRENT_SONG, playlistClone.songs.findIndex(s => s.id === song.id));
            storage.set(storageKey.CURRENT_PLAYLIST, playlistClone);
            storage.set(storageKey.CURRENT_PLAYLIST_DEFAULT, playlist)

            return {
                ...state,
                current: song,
                playlist: playlistClone,
                playlistDefault: playlist,
                isPlaying: true,
                isLoaded: song.id === state.current.id,
            }
        }
        
        case types.TOGGLE_SONG :
            return {
                ...state,
                isPlaying: !state.isPlaying,
            }

        case types.NEXT_SONG : {
            const index = state.playlist.songs.findIndex(song => song.id === state.current.id);
            const nextIndex = (index + 1) % state.playlist.songs.length;
            storage.set(storageKey.CURRENT_SONG, nextIndex);
            
            return {
                ...state,
                isLoaded: false,
                current: state.playlist.songs[nextIndex],
            }
        }

        case types.PREV_SONG : {
            const index = state.playlist.songs.findIndex(song => song.id === state.current.id);
            const prevIndex = (index - 1) % state.playlist.songs.length;
            storage.set(storageKey.CURRENT_SONG, prevIndex);
            return {
                ...state,
                isLoaded: false,
                current: state.playlist.songs[prevIndex],
            }
        }

        case types.TOGGLE_RANDOM_PLAY : {
            const isRandom = storage.get(storageKey.RANDOM);
            storage.set(storageKey.RANDOM, !isRandom);
            
            if (isRandom) {
                storage.set(storageKey.CURRENT_SONG, state.playlistDefault.songs.findIndex(song => 
                    song.id === state.current.id
                ));
                
                return {
                    ...state,
                    random: false,
                    playlist: state.playlistDefault,
                }
            } else {
                storage.set(storageKey.CURRENT_SONG, 0);
                return {
                    ...state,
                    random: true,
                    playlist: {
                        ...state.playlist,
                        songs: [
                            state.current, 
                            ...state.playlistDefault.songs.filter(s => s.id !== state.current.id).sort(() =>
                                0.5 - Math.random()
                            )
                        ]
                    }
                }
            }

        }
        
        case types.ADD_SONG_TO_HISTORY : {
            const { data } = actions.payload;
            const newHistory = state.history.filter(item => item.id !== data.id);
            newHistory.unshift(data);
            storage.set(storageKey.HISTORY, newHistory);
            return {
                ...state,
                history: newHistory
            }
        }

        default:
            return state;
    };
};

export default reducer;