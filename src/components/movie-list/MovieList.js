import React from 'react'
import fetch from 'cross-fetch'

import Movie from '../movie/Movie'
import {uniq} from '../../utils/general-utils'

import './MovieList.css'

class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfMovies: null
        }
    }

    componentDidMount () {
      // Make a request to retrive the movie from the server
      const url = 'http://starlord.hackerearth.com/movieslisting'
      fetch(url)
      .then(response => response.json())
      .then(json => {
          // Removing Duplicate elements before storing it to state
          this.setState({listOfMovies: uniq(json)})
      })
      .catch(err => console.log(err))
    }

    render () {
        if(this.state.listOfMovies) {
            return (
                <main>
                    <div className='movie-list-container'>
                        {this.state.listOfMovies.map((props) => <Movie 
                            key={props.movie_title + props.title_year} 
                            {...props}/>)}
                    </div>
                </main>
            )
        } else {
            // Show a message or a spinner until the response is received
            return (
                <main>
                    <div id="spinner"></div>
                </main>
            )
        }
    }
}

export default MovieList