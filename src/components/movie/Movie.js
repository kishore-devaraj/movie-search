import React from 'react'
import './Movie.css'

const Movie = (props) => {
    return (
        <section className='movie'>
            <div className='movie-title-container'>
                <b>{props.movie_title ? props.movie_title : 'Title Not Found'}
                {props.title_year ? (props.title_year) : ''}</b>
                <i>&nbsp;&nbsp;&nbsp;{props.content_rating ? props.content_rating : ''}</i>
            </div>
            <section className='movie-details'>
                <div>
                    <div>Directed by <b>{props.director_name ? props.director_name : ''}</b></div>
                    <h4>Starring:</h4>
                    <ul> 
                        <li>{props.actor_1_name ? props.actor_1_name : ''}</li>
                        <li>{props.actor_2_name ? props.actor_2_name : ''}</li>
                    </ul>
                </div>
                <aside>
                    <ul>
                        <li><b>Language</b>: {props.language ? props.language : '' }</li>
                        <li><b>Country</b>: {props.country ? props.country : ''}</li>
                        <li><b>Genres</b>: {props.genres ? props.genres : ''}</li>
                    </ul>
                </aside>
            </section>
        </section>
    )
} 

export default Movie