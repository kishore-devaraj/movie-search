const { uniq, searchByMovieName }  = require('../src/utils/general-utils')
const { sortByHeap } = require('../src/utils/sort-by-heap')
const expect = require('expect')

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

describe('General Utils Test Cases', () => {
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

describe('Sorting By Title Year Tests', () => {
    it('should sort by ascending title_year', () => {
    let sortedByAsc = sortByHeap(movies, 'asc')
        expect(sortedByAsc[0].title_year).toBe(2010)
        expect(sortedByAsc[1].title_year).toBe(2010)
        expect(sortedByAsc[2].title_year).toBe(2011)
        expect(sortedByAsc[3].title_year).toBe(2014)
        expect(sortedByAsc[4].title_year).toBe(2016)
    })

    it('should sort by descending title_year', () => {
        let sortedByDesc = sortByHeap(movies, 'desc')
        expect(sortedByDesc[0].title_year).toBe(2016)
        expect(sortedByDesc[1].title_year).toBe(2014)
        expect(sortedByDesc[2].title_year).toBe(2011)
        expect(sortedByDesc[3].title_year).toBe(2010)
        expect(sortedByDesc[4].title_year).toBe(2010)
    })

    
})
  