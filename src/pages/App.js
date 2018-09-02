import React from 'react'

import Header from '../components/header/Header'
import MovieList from '../components/movie-list/MovieList'
import './App.css'


const App = () => {
    return (
        <div id='body-container'>
            <Header />
            <MovieList />
        </div>
    )
}

export default App