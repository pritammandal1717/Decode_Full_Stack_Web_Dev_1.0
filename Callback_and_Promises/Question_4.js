/** 
Assignment 4
Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL (https:// jsonplaceholder.typicode.com/todos/1) and returns the parsed JSON response.
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