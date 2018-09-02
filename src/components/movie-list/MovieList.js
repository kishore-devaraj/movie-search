import React from 'react'

import Movie from '../movie/Movie'
import './MovieList.css'

class MovieList extends React.Component {
    render () {
        return (
            <main>
                <div className='movie-list-container'>
                    {this.props.listOfMovies.map((innerProps) => <Movie 
                        key={innerProps.movie_title + innerProps.title_year} 
                        {...innerProps}/>)}
                </div>
            </main>
        )
    }
}

export default MovieList