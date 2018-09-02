import React from 'react'
import fetch from 'cross-fetch'

import Header from '../components/header/Header'
import MovieList from '../components/movie-list/MovieList'
import { uniq, searchByMovieName} from '../utils/general-utils'
import './App.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfMovies: []
        }
        this.searchByName = this.searchByName.bind(this)
        this.getAllMovies = this.getAllMovies.bind(this)
    }

    searchByName (e, movieName) {
        e.preventDefault()
        console.log(movieName)
        if(movieName.trim() !== '') {
            const filteredMovies = searchByMovieName(this.state.listOfMovies, movieName)
            if(filteredMovies.length === 0) {
                console.log('No result found')
            } else {
                this.setState({listOfMovies: filteredMovies})
            }
        } else {
            // If the search value is empty fetch the movies again
            if(this.state.listOfMovies.length < 499) {
                console.log('Get the movies again')
                this.getAllMovies()
            }
        }
    }

    getAllMovies() {
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

    componentDidMount () {
      this.getAllMovies()
    }

   render() {
       if (this.state.listOfMovies.length !== 0) {
            return (
                <div id='body-container'>
                    <Header searchByName={this.searchByName}/>
                    <MovieList listOfMovies={this.state.listOfMovies}/>
                </div>
            )
        } else {
            // Show a message or a spinner until the response is received
            return (
               <div id="spinner"></div>
            )
        }
    }
}

export default App