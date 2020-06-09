import React from 'react';
import { connect } from 'react-redux';
import './FilmList.css'

class FilmList extends React.Component {

    renderList() {
        const renders = this.props.movies.map(movie => {
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
                                <a className="header film-header">{movie.title}</a>
                                <span className="description">{movie.year}</span>
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

        return renders;
    }

    render () {
        return (
            <div className="ui items film-list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { films: state.films, movies: state.movies};
}
export default connect(mapStateToProps)(FilmList);