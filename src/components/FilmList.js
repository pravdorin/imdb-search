import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './FilmList.css'
import FilmPage from '../pages/FilmPage';

class FilmList extends React.Component {


    renderList = () => {
        return this.props.movies.map(movie => {
                if(movie.title === '') {
                    return null;
                } else {
                    return (
                        <div className="item film-item" key={movie.id}>
                            <div className="image">
                                <img className="film-image" src={movie.poster} alt={movie.title} />
                            </div>
                            <div className="content">
                                <div className="film-flex">
                                    <Link to={`/${movie.id}`} className="header film-header">{movie.title}</Link>
                                    <span className="description">{movie.year === '' ? null : `(${movie.year})`}</span>
                                </div>
                                <div className="meta film-rating">
                                <span>Rating: {movie.rating}/10</span>
                                </div>
                                <div className="extra film-length">
                                {movie.length}
                                </div>
                            </div>
                        </div>
                    )
                }
        })
    }

    render () {
        return (
            <div>
                <div className="ui items film-list">
                {this.renderList()}
                </div>
                <Route path="/:id" component={FilmPage} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { films: state.films, movies: state.movies};
}
export default connect(mapStateToProps)(FilmList);