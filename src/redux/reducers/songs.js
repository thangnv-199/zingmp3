import { zingChart } from '../../data/zingChart';

import * as types from '../../constant/types';
import storage from '../../utils/storage';

const playlistData = storage.getCurrentPlaylist();
const playlistDefaultData = storage.getCurrentPlaylistDefault()
const currentSongIndex = storage.getCurrentSong();
const history = storage.getHistory();

playlistData || storage.setCurrentPlaylist(zingChart);
playlistDefaultData || storage.setCurrentPlaylistDefault(zingChart);
currentSongIndex || storage.setCurrentSong(0);
const initialState = {
    isPlaying: false,
    isLoaded: false,
    random: storage.getRandom(),
    history: history,
    playlist: playlistData,
    playlistDefault: playlistDefaultData,
    current: playlistData ? playlistData.songs[currentSongIndex] : zingChart.songs[0],
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.SONG_LOADED:
            return {
                ...state,
                isLoaded: true,
            }

        case types.OPEN_PLAYLIST: {

            let { playlist } = actions.payload;
            let song = playlist.songs[0];
            const playlistClone = { ...playlist }

            if (state.random) {
                const random = Math.floor(Math.random() * playlist.songs.length);
                song = playlist.songs[random];
                playlistClone.songs = [
                    song,
                    ...playlistClone.songs.filter(s => s.id !== song.id).sort(() =>
                        0.5 - Math.random()
                    )
                ]
            }

            storage.setCurrentSong(playlistClone.songs.findIndex(s => s.id === song.id));
            storage.setCurrentPlaylist(playlistClone);
            storage.setCurrentPlaylistDefault(playlist)

            return {
                ...state,
                current: song,
                playlist: playlistClone,
                playlistDefault: playlist,
                isPlaying: true,
                isLoaded: song.id === state.current.id,
            }
        }

        case types.CHANGE_SONG: {

            let { song, playlist } = actions.payload;
            const playlistClone = { ...playlist }

            if (state.random) {
                playlistClone.songs = [
                    song,
                    ...playlistClone.songs.filter(s => s.id !== song.id).sort(() =>
                        0.5 - Math.random()
                    )
                ]
            }

            storage.setCurrentSong(playlistClone.songs.findIndex(s => s.id === song.id));
            storage.setCurrentPlaylist(playlistClone);
            storage.setCurrentPlaylistDefault(playlist)

            return {
                ...state,
                current: song,
                playlist: playlistClone,
                playlistDefault: playlist,
                isPlaying: true,
                isLoaded: song.id === state.current.id,
            }
        }

        case types.TOGGLE_SONG:
            return {
                ...state,
                isPlaying: !state.isPlaying,
            }

        case types.NEXT_SONG: {
            const index = state.playlist.songs.findIndex(song => song.id === state.current.id);
            const nextIndex = (index + 1) % state.playlist.songs.length;
            storage.setCurrentSong(nextIndex);

            return {
                ...state,
                isLoaded: false,
                current: state.playlist.songs[nextIndex],
            }
        }

        case types.PREV_SONG: {
            const index = state.playlist.songs.findIndex(song => song.id === state.current.id);
            const prevIndex = (index - 1) % state.playlist.songs.length;
            storage.setCurrentSong(prevIndex);
            return {
                ...state,
                isLoaded: false,
                current: state.playlist.songs[prevIndex],
            }
        }

        case types.TOGGLE_RANDOM_PLAY: {
            const isRandom = storage.getRandom();
            storage.setRandom(!isRandom);

            if (isRandom) {
                storage.setCurrentSong(state.playlistDefault.songs.findIndex(song =>
                    song.id === state.current.id
                ));
                storage.setCurrentPlaylist(state.playlistDefault);

                return {
                    ...state,
                    random: false,
                    playlist: state.playlistDefault,
                }
            } else {
                const randomPlayist = {
                    ...state.playlist,
                    songs: [
                        state.current,
                        ...state.playlistDefault.songs.filter(s => s.id !== state.current.id).sort(() =>
                            0.5 - Math.random()
                        )
                    ]
                }
                storage.setCurrentSong(0);
                storage.setCurrentPlaylist(randomPlayist);
                return {
                    ...state,
                    random: true,
                    playlist: randomPlayist,
                }
            }

        }

        case types.ADD_SONG_TO_HISTORY: {
            const { data } = actions.payload;
            const newHistory = state.history.filter(item => item.id !== data.id);
            newHistory.unshift(data);
            newHistory.length > 100 && (newHistory.length = 100);
            storage.setHistory(newHistory);
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