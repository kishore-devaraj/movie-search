/**
 * 
 * @param {arrayOfObjects} array
 * @returns Only the unique objects in the form of array 
 */
function uniq (array) {
    let uniqObjects = {}
    return array.filter(obj => {
        return uniqObjects.hasOwnProperty(obj.movie_title + obj.title_year) ? false 
        : uniqObjects[obj.movie_title + obj.title_year] = true
    })
}

module.exports = {
    uniq
}

