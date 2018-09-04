import React from 'react'
import fetch from 'cross-fetch'

import Header from '../components/header/Header'
import MovieList from '../components/movie-list/MovieList'
import { uniq, searchByMovieName, filterByLang, filterByCountry} from '../utils/general-utils'
import { sortByHeap } from '../utils/sort-by-heap'
import './App.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfMovies: [],
            listOfMoviesFromResponse: [],
            sortByYearOrder: 'None'
        }
        this.searchByName = this.searchByName.bind(this)
        this.getAllMovies = this.getAllMovies.bind(this)
        this.handleSortByYear = this.handleSortByYear.bind(this)
        this.filterChange = this.filterChange.bind(this)
    }

    getAllMovies() {
        // Make a request to retrive the movie from the server
       const url = 'http://starlord.hackerearth.com/movieslisting'
       fetch(url)
       .then(response => response.json())
       .then(json => {
           let uniqJson = uniq(json)
           // Removing Duplicate elements before storing it to state
           this.setState({listOfMovies: uniqJson, listOfMoviesFromResponse: uniqJson})
       })
       .catch(err => console.log(err))
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
            this.setState({listOfMovies: this.state.listOfMoviesFromResponse})
        }
    }

    handleSortByYear (e) {
        console.log(e.target.value)
        this.setState({sortByYearOrder: e.target.value})
        if(e.target.value !== 'None') {
            sortByHeap(this.state.listOfMovies, e.target.value)
        } else {
            this.setState({listOfMovies: this.state.listOfMoviesFromResponse})
        }
    }

    filterChange (filter, value) {
        let filteredMovies
        if (filter === 'lang') {
            filteredMovies = filterByLang(this.state.listOfMovies, value)
            if (filteredMovies.length !== 0) this.setState({listOfMovies: filteredMovies})

        } else if (filter === 'country') {
            filteredMovies= filterByCountry(this.state.listOfMovies, value)
            if (filteredMovies.length !== 0) this.setState({listOfMovies: filteredMovies})
        } else {
            this.setState({listOfMovies: this.state.listOfMoviesFromResponse})
        }
    }

    componentDidMount () {
      this.getAllMovies()
    }

   render() {
       if (this.state.listOfMovies.length !== 0) {
            return (
                <div id='body-container'>
                    <Header 
                        searchByName={this.searchByName} 
                        handleSortByYear={this.handleSortByYear}
                        defaultValue={this.state.sortByYearOrder}
                        filterChange={this.filterChange} />
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