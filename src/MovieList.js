import React, { Component } from 'react';
import _ from 'lodash';
import MovieItem from './MovieItem';
import './App.css';

class MovieList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log('this.props.movieList', this.props.movieList);
    }

    listMovies() {
        
        let { movieList } = this.props;
        return _.map( movieList, (movie) => {
            return (
                <MovieItem movie={movie} />
            );
        });
    }

    render () {
        
        return (
        <div className="rTable">
            <div className="rTableRow">
                <div className="rTableHead">  <strong>Name</strong>  </div>
                <div className="rTableHead"> <strong>Value</strong>  </div>
            </div>
                
            {this.listMovies()}
        </div>
        );
    }   
}

export default MovieList;