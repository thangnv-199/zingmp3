import { combineReducers } from "redux";
import songs from './songs';
import playlist from './playlist';
import modal from './modal';

const reducers = combineReducers({
    songs,
    playlist,
    modal,
})

export default reducers;