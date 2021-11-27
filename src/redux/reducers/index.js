import { combineReducers } from "redux";
import songs from './songs';
import playlist from './playlist';

const reducers = combineReducers({
    songs,
    playlist,
})

export default reducers;