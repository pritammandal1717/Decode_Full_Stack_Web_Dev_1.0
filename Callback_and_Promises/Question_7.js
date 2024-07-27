/** 
Assignment 7
Write a function fetch MultipleData that takes an array of URLs and uses Promise.all() to fetch data from all the URLS concurrently. Return an array of responses.
API to be used
Change todo id for each API call
https://jsonplaceholder.typicode.com/todos/1
*/

function fetchMultipleData(urls){

    const promises = urls.map(url => 
        fetch(url).then(response => {
            return response.json();
        })
    ) 

    return Promise.all(promises);
}

const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
]

fetchMultipleData(urls).then(response => {
    console.log(response);
});