/**
 * 
 * @param {arrayOfObjects} array
 * @returns Only the unique objects in the form of array 
 */
function uniq (array) {
    let uniqObjects = {}
    return array.filter(obj => {
        // obj = recursiveTrimming(obj)
        return uniqObjects.hasOwnProperty(obj.movie_title + obj.title_year) ? false 
        : uniqObjects[obj.movie_title + obj.title_year] = true
    })
}

/**
 * 
 * @param {array, movieName} array 
 * @returns List of Movies matched with name 
 */
function searchByMovieName(array, movieName) {
    return array.filter((movie) => {
        return (movie.movie_title.toLowerCase().trim() === movieName.toLowerCase().trim()) ? movie : false
    })
}

/**
 * 
 * @param {MovieArray} array 
 * @param {YearToBeFiltered} year 
 */
function filterByYear (array, year) {
    return array.filter(movie => {
        return movie.title_year === year ? movie : false
    })
}

/**
 * 
 * @param {MovieArray} array 
 * @param {LanguageToBeFiltered} lang 
 */
function filterByLang (array, lang) {
    return array.filter(movie => {
        return movie.language.toLowerCase() === lang.toLowerCase() ? movie : false
    })
}

/**
 * 
 * @param {MovieArray} array 
 * @param {CountryToBeFiltered} country 
 */
function filterByCountry (array, country) {
    return array.filter(movie => {
        return movie.country.toLowerCase() === country.toLowerCase() ? movie: false
    })
}

module.exports = {
    uniq,
    searchByMovieName,
    filterByYear,
    filterByLang,
    filterByCountry
}

