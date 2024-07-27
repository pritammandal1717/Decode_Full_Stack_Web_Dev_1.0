/** 
Assignment 2
Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message "Data fetched successfully."
*/



function getData(){
    const promise = new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Data Fetched Successfully")
        },2000)
    });
    return promise;
}

getData().then((message) =>{
    console.log(message)
})