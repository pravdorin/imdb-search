import React from 'react';
import { connect } from 'react-redux';
import './FilmList.css'

class FilmList extends React.Component {

    renderList() {
		return (
            <div>
                <h1>{this.props.movie.title}</h1>
                <h1>{this.props.movie.rating}</h1>
            </div>
        )
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
export default connect(mapStateToProps)(FilmList);