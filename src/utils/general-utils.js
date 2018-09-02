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

function searchByMovieName(array, movieName) {
    return array.filter((movie) => {
        return (movie.movie_title.toLowerCase().trim() === movieName.toLowerCase().trim()) ? movie : false
    })
}

module.exports = {
    uniq,
    searchByMovieName
}


