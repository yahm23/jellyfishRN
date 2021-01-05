import {createStore, combineReducers} from 'redux';
import barReducer from './reducers/barchartReducer';

const rootReducer = combineReducers({
    bars: barReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore; 