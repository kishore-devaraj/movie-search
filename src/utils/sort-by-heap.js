/**
 * 
 * @param {array to be sorted} array
 * @param {sorting order} desc | asc 
 * Sorting the list of movies using heap sort with title_year as a key
 */
function sortByHeap (array, sortOrder) {
    if (sortOrder.toLowerCase() === 'asc') {
        // Build Max Heap Binary Tree
        maxHeapBinaryTree(array, sortOrder.toLowerCase())
    } else {
        // Build Min Heap Binary Tree
        minHeapBinaryTree(array, sortOrder.toLowerCase())
    }

    let lastElementIndex =  array.length - 1
    while (lastElementIndex > 0) {
        swap(array, 0, lastElementIndex)
        heapify(array, 0, lastElementIndex, sortOrder.toLowerCase())
        lastElementIndex -= 1
    }
    return array
}
  
function maxHeapBinaryTree (array, sortOrder) {
    let i = Math.floor((array.length / 2) - 1)

    while (i >= 0) {
        heapify(array, i, array.length, sortOrder)
        i--;
    }
}

function minHeapBinaryTree (array, sortOrder) {
    let max = Math.floor((array.length / 2) - 1)
    let i = 0;
    while (i <= max) {
        heapify(array, i, array.length, sortOrder)
        i++;
    }
}
  
function heapify (array, i, max, sortOrder) {
    let index, leftChildIndex, rightChildIndex

    while (i < max) {
        index = i
        leftChildIndex = (index * 2) + 1
        rightChildIndex = leftChildIndex + 1 

        // Perform sorting based on order
        if (sortOrder === 'asc') {
            if(leftChildIndex < max && array[leftChildIndex].title_year > array[index].title_year) {
                index = leftChildIndex
            }

            if(rightChildIndex < max && array[rightChildIndex].title_year > array[index].title_year) {
                index = rightChildIndex
            }
        } else {
            if(leftChildIndex < max && array[leftChildIndex].title_year < array[index].title_year) {
                index = leftChildIndex
            }
    
            if(rightChildIndex < max && array[rightChildIndex].title_year < array[index].title_year) {
                index = rightChildIndex
            }
        }

        if(i === index) {
            return
        }

        swap(array, i, index)
        i = index
    }
}

function swap(array, minNumberIndex, maxNumberIndex) {
    let tempVar = array[maxNumberIndex]
    array[maxNumberIndex] = array[minNumberIndex]
    array[minNumberIndex] = tempVar
}

module.exports = {
    sortByHeap
}