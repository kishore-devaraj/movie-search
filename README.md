# movie-search
A minimalist application that shows the list of movies fetched from the external api and lists it down to the end users.
The main goal of this project is demostrate how efficiently **sorting algorithm** can be implemented in list of objects (Movies).

![](https://github.com/kishore-devaraj/movie-search/blob/master/screenshots/heapSortExample.gif)

## Implementation of Sorting Algorithm

* Sorting list of 10 Movies could be easily done by naive methods, but sorting something huge list say (500 - 1000) takes lot
of time and it affects the performance too. If we sort the big list using *selection sort, bubble sort* or even *insertion sort*
it takes O(n*2) time to process. 

* Let say 1s is need for 1 iteration. If we implement the above mentioned sorting algorithms for this problem, it would (500 * 500)
seconds to complete the process. Hugh! This is not what we wanted. Then what else option we have?

* Lets move to better sorting algorithm such as *quicksort, mergesort and heapsort*. All three have the same time complexity.
But time complexity is not the only place we should look
at when implementing sorting algorithm. There are other factors such space complexity, stablity etc.

* When we take space complexity, **Mergesort** is **out-of-place algorithm**, means it allocates a separates memory for sorting.
So mergesort is out of our choices. What we do have now? QuickSort.

* **Quicksort** is ideally a good choice, with time complexity **O(nlog(n))** which is better than O(n^2). Also it's **in-place
algorithm** which less memory needed. But at worst scenario, time complexity will be still O(n^2). We can put this under hold.
Moving on...

* The one that is left is **Heapsort** with a time complexity of **O(nlog(n))** at all conditions and an **in-place algorithm**.
Tadaa we got the one what we needed. Heapsort, the saviour and that is one we have implemented for this project.

## Getting Started
### Installing

* Clone or zip the repo to your local system
```
git clone https://github.com/kishore-devaraj/movie-search
```

* Install the required packages mentioned in package.json
 ``` 
 cd <project-dir>
 npm install
 ```
 
 ### Running Tests
 * Ensure that everything works by running the predefined tests
 ```
 npm run test
 ```
 
 ## Deployment
 This repo is already deployed in github pages, but since github pages serves pages by SSL/TLS by default
 consuming api with less-secure protocol say http will result in no-referrer issue. But when served via http 
 everthing works fine.
 
 ## Built With
   1. ReactJS - Front-end javascript frameworks for view part.
   1. npm - node package manager to install dependencies.
   1. mocha - Testing Library.
   1. expect - Assertion Library.
 
 
