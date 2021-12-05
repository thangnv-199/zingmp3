import * as keys from '../constant/storage';
import { zingChart } from '../data/zingChart';

const createStorage = (key) => {
    const storage = JSON.parse(localStorage.getItem(key)) ?? {};
    const save = () => {
        localStorage.setItem(key, JSON.stringify(storage));
    }
    
    return {
        get(key) {
            return storage[key];
        },
        set(key, value) {
            storage[key] = value;
            save();
        },
        remove(key) {
            delete storage[key];
            save();
        },
    };
};
const storage = createStorage('zingmp3');

// const useStorage = ['set', 'get', 'remove'].reduce((all, storageMethod) => {
//     return {
//         ...all,
//         ...Object.values(keys).reduce((all, key) => {
//             let method;
//             const dkm = storageMethod + key[0].toUpperCase() + key.substring(1);
//             const dcm = (data) => storage[storageMethod](key, data);
//             const dbm = () => storage[storageMethod](key);
//             if (storageMethod === 'set') {
//                 method = { [dkm]: dcm }
//             } else {
//                 method = { [dkm]: dbm }
//             }
//             method = storageMethod === 'set' ? { [dkm]: dcm } :  { [dkm]: dbm }
//             return { 
//                 ...all,
//                 ...method,
//             }
//         }, {})
//     }
// }, {})

const useStorage = {

    setDefaultPlaylist: (data) => storage.set(keys.DEFAULT_PLAYLIST, data),
    getDefaultPlaylist: () => storage.get(keys.DEFAULT_PLAYLIST),
    removeDefaultPlaylist: () => storage.remove(keys.DEFAULT_PLAYLIST),

    setplaylists: (data) => storage.set(keys.PLAYLISTS, data),
    getplaylists: () => storage.get(keys.PLAYLISTS) || [],
    removeplaylists: () => storage.remove(keys.PLAYLISTS),

    setCurrentPlaylist: (data) => storage.set(keys.CURRENT_PLAYLIST, data),
    getCurrentPlaylist: () => storage.get(keys.CURRENT_PLAYLIST) || { ...zingChart },
    removeCurrentPlaylist: () => storage.remove(keys.CURRENT_PLAYLIST),

    setCurrentPlaylistDefault: (data) => storage.set(keys.CURRENT_PLAYLIST_DEFAULT, data),
    getCurrentPlaylistDefault: () => storage.get(keys.CURRENT_PLAYLIST_DEFAULT) || { ...zingChart },
    removeCurrentPlaylistDefault: () => storage.remove(keys.CURRENT_PLAYLIST_DEFAULT),

    setCurrentSong: (data) => storage.set(keys.CURRENT_SONG, data),
    getCurrentSong: () => storage.get(keys.CURRENT_SONG),
    removeCurrentSong: () => storage.remove(keys.CURRENT_SONG),

    setHistory: (data) => storage.set(keys.HISTORY, data),
    getHistory: () => storage.get(keys.HISTORY) || [],
    removeHistory: () => storage.remove(keys.HISTORY),

    setMute: (data) => storage.set(keys.MUTE, data),
    getMute: () => storage.get(keys.MUTE),
    removeMute: () => storage.remove(keys.MUTE),

    setRandom: (data) => storage.set(keys.RANDOM, data),
    getRandom: () => storage.get(keys.RANDOM),
    removeRandom: () => storage.remove(keys.RANDOM),

    setRepeat: (data) => storage.set(keys.REPEAT, data),
    getRepeat: () => storage.get(keys.REPEAT) || 0,
    removeRepeat: () => storage.remove(keys.REPEAT),

    setVolume: (data) => storage.set(keys.VOLUME, data),
    getVolume: () => storage.get(keys.VOLUME) || 1,
    removeVolume: () => storage.remove(keys.VOLUME),

    setLibrary: (data) => storage.set(keys.LIBRARY, data),
    getLibrary: () => storage.get(keys.LIBRARY) || {
        id: 0,
        name: 'Thư viện cá nhân',
        songs: [],
    },
    removeLibrary: () => storage.remove(keys.LIBRARY),

    setUsername: (data) => storage.set(keys.USERNAME, data),
    getUsername: () => storage.get(keys.USERNAME),
    removeUsername: () => storage.remove(keys.USERNAME),

    setTheme: (data) => storage.set(keys.THEME, data),
    getTheme: () => storage.get(keys.THEME) || 'dark',
    removeTheme: () => storage.remove(keys.THEME),

}

export default useStorage;