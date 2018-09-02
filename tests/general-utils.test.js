const { uniq, searchByMovieName }  = require('../src/utils/general-utils')
const expect = require('expect')

describe('General Utils Test Cases', () => {
    let movies = [
        { 
            'movie_title': 'Pirates of the caribbean',
            'title_year': 2010
        },
        { 
            'movie_title': 'Avatar ',
            'title_year': 2011
        },
        { 
            'movie_title': 'Argo',
            'title_year': 2014
        },
        { 
            'movie_title': 'Harry Potter',
            'title_year': 2016
        },
        { 
            'movie_title': 'Pirates of the caribbean',
            'title_year': 2010
        },
    ]

    it('should return only the unique objects', () => {
        uniqueMovies = uniq(movies)
        expect(uniqueMovies.length).toBe(4)
    })

    it('should return movie by its name', () => {
        movieByName = searchByMovieName(movies, 'harry Potter')
        expect(movieByName[0]).toExist()
        expect(movieByName[0]).toInclude({ 
            'movie_title': 'Harry Potter',
            'title_year': 2016
        })  
    })

    it('should return movie even with white spaces', () => {
        movieByName = searchByMovieName(movies, '  harrY Potter  ')
        expect(movieByName[0]).toExist()
        expect(movieByName[0]).toInclude({ 
            'movie_title': 'Harry Potter',
            'title_year': 2016
        })  
    }) 
    it('should return empty array when no movie present', () => {
        movieByName = searchByMovieName(movies, 'Avengers')
        expect(movieByName[0]).toNotExist()
    }) 
})