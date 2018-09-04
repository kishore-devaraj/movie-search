const { uniq, searchByMovieName, filterByYear, filterByLang, filterByCountry }  = require('../src/utils/general-utils')
const { sortByHeap } = require('../src/utils/sort-by-heap')
const expect = require('expect')

let movies = [
    { 
        'movie_title': 'Pirates of the caribbean',
        'title_year': 2010,
        'language': 'English',
        'country': 'USA'
    },
    { 
        'movie_title': 'Avatar ',
        'title_year': 2011,
        'language': 'Spanish',
        'country': 'Spain'
    },
    { 
        'movie_title': 'Argo',
        'title_year': 2014,
        'language': 'Hindi',
        'country': 'India'
    },
    { 
        'movie_title': 'Harry Potter',
        'title_year': 2016,
        'language': 'Arabic',
        'country': 'UAE'
    },
    { 
        'movie_title': 'Pirates of the caribbean',
        'title_year': 2010,
        'language': 'English',
        'country': 'USA'
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
            'title_year': 2016,
            'language': 'Arabic',
            'country': 'UAE'
        })  
    })

    it('should return movie even with white spaces', () => {
        movieByName = searchByMovieName(movies, '  harrY Potter  ')
        expect(movieByName[0]).toExist()
        expect(movieByName[0]).toInclude({ 
            'movie_title': 'Harry Potter',
            'title_year': 2016,
            'language': 'Arabic',
            'country': 'UAE'
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

describe('Filter by year', () => {
    it('should return movies by title year', () => {
        let filteredMovies = filterByYear(movies, 2010)
        expect(filteredMovies.length).toBe(2)
        expect(filteredMovies).toInclude(
            { 
                'movie_title': 'Pirates of the caribbean',
                'title_year': 2010,
                'language': 'English',
                'country': 'USA'
            } 
        )
    })

    it('should return one movie for 2009', () => {
        let filteredMovies = filterByYear(movies, 2016)
        expect(filteredMovies.length).toBe(1)
        expect(filteredMovies).toInclude(
            { 
                'movie_title': 'Harry Potter',
                'title_year': 2016,
                'language': 'Arabic',
                'country': 'UAE'
            }
        )
    })

    it('should not return movie for unknown year', () => {
        let filteredMovies = filterByYear(movies, 2999)
        expect(filteredMovies.length).toBe(0)
    })
})

describe('Filter By Langauge Unit Test', () => {
    it('should return list of movies for selected lang', () => {
        let filteredMovies = filterByLang(movies, 'English')
        expect(filteredMovies.length).toBe(2)
        expect(filteredMovies).toInclude(
            { 
                'movie_title': 'Pirates of the caribbean',
                'title_year': 2010,
                'language': 'English',
                'country': 'USA'
            }
        )
    })

    it('should not return movies for unknown language', () => {
        let filteredMovies = filterByLang(movies, 'Chinese')
        expect(filteredMovies.length).toBe(0)  
    })
})

describe('Filter by country unit tests', () => {
    it('should return list of movies by country', () => {
        let filteredMovies = filterByCountry(movies, 'USA')
        expect(filteredMovies.length).toBe(2)
        expect(filteredMovies).toInclude({ 
            'movie_title': 'Pirates of the caribbean',
            'title_year': 2010,
            'language': 'English',
            'country': 'USA'
        })
    })

    it('should not return movies for unknown country', () => {
        let filteredMovies = filterByCountry(movies, 'Russian')
        expect(filteredMovies.length).toBe(0)
    })
})