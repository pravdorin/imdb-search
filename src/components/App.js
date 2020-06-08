import React from 'react';
import Logo from './Logo'
import SearchFilms from './SearchFilms';
import FilmList from './FilmList';
import './App.css';

const App = () => {

    return (
        <div className="ui container">
            <Logo />
            <div>
                <SearchFilms />
                <FilmList />
            </div>
        </div>
    )
}

export default App;