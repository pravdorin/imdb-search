import React from 'react';
import { connect } from 'react-redux';
import { searchFilms } from '../action';

import './SearchFilms.css';

class SearchFilms extends React.Component {

    state = {input: ''};

    submitSearch = (e) => {
        e.preventDefault();
        this.props.searchFilms(this.state.input)
    }

    render() {
        return (
        <form onSubmit={this.submitSearch} className="ui form" action="">
            <div className="ui icon input search-film">
                <input className="search-bar" type="text" value={this.state.input} placeholder="Search..." onChange={e => this.setState({input: e.target.value})} />
                <i className="search icon"></i>
            </div>
        </form>
        )
    }
}

const mapStateToProps = (state) => {
    return { films: state.films };
}

export default connect(mapStateToProps, { searchFilms })(SearchFilms);