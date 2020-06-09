import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import fetchFilm from './fetchReducer';

export default combineReducers({ 
    films: searchReducer,
    movies: fetchFilm,
});
