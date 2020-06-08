import React from 'react';
import { connect } from 'react-redux';
import { fetchFilm } from '../action';
import './FilmList.css'

class FilmList extends React.Component {

    renderList() {
        const movies = this.props.films.map(film => {
            return (
                <div className="item film-item" key={film.id}>
                    <div className="image">
                        <img className="film-image" src={film.image} alt={film.title}/>
                    </div>
                    <div className="content">
                        <a className="header film-header">{film.title}</a>
                    </div>
                </div>
            )
        })

        return movies;
    }

    render () {
        return (
            <div className="ui items film-list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { films: state.films, movie: state.movie};
}
export default connect(mapStateToProps, {fetchFilm })(FilmList);