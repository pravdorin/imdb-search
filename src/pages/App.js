import React from 'react';
import SearchFilms from '../components/SearchFilms';
import FilmList from '../components/FilmList';
import './App.css';

const App = () => {

    return (
        <div className="ui container">
        <div>
            <SearchFilms />
            <FilmList />
        </div>
        </div>
    )
}

export default App;