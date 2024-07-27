/** 
Assignment 3
Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns the parsed JSON response.
API to be used
https://jsonplaceholder.typicode.com/todos/1
*/

async function fetchData(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await res.json();
        console.log(data)
    }catch(err){
        console.log(err);
    }
}

fetchData();