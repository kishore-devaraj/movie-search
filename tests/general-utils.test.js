const { uniq }  = require('../src/utils/general-utils')
const expect = require('expect')

describe('General Utils Test Cases', () => {
    it('should return only the unique objects', () => {
        let persons = [
            { 
                'movie_title': 'kishore',
                'title_year': 23
            },
            { 
                'movie_title': 'kishore Devaraj',
                'title_year': 23
            },
            { 
                'movie_title': 'kishore',
                'title_year': 24
            },
            { 
                'movie_title': 'gautham',
                'title_year': 26
            },
            { 
                'movie_title': 'kishore',
                'title_year': 23
            },
        ]

        expect(uniq(persons).length).toBe(4)

    })
})