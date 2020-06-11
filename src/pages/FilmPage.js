import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './FilmPage.css'

class FilmPage extends React.Component {

    render() {

        const movies = this.props.movies[0];

        const renderActors = () => {
            return movies.cast.map(actor => {
                return (
                    <div className="actors">
                        {actor.actor}
                    </div>
                )
            })
        }

        return (
            <div>
            <Link className="link-back" to="/">Back</Link>
            <div className="film-page-item">
                <div className="film-item-head">
                    <div className="film-item-head-top">
                        <div className="film-item-head-top-left">
                            <div className="mini-row">
                                <h2 className="film-item-head-title">{movies.title}</h2>
                                <h4 className="film-item-head-year">{movies.year === '' ? null : `(${movies.year})`}</h4>
                                <p className="film-item-head-length">{movies.length}</p>
                            </div>
                        </div>
                        <div className="film-item-head-top-right">
                            <i class="star icon" />
                            <h3 className="film-item-head-rating">{movies.rating}/10</h3>
                        </div>
                    </div>
                </div>
                <div className="film-item-hero">
                    <div className="film-hero-poster">
                        <img className="hero-poster-image" src={movies.poster} alt={movies.title} />
                    </div>
                    <div className="film-hero-trailer">
                        <iframe className="film-hero-frame" src={movies.trailer.link} frameborder="0" title="Trailer"></iframe>
                    </div>
                </div>
                <div className="film-item-body">
                    <div className="film-body-plot">
                        {movies.plot}
                    </div>
                    <div className="film-body-plot">
                        Actors: 
                        {renderActors()}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { movies: state.movies.filter(el => {
        return el.id === ownProps.match.params.id
    })};
}

export default connect(mapStateToProps)(FilmPage)