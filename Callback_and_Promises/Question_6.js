/** 
Assignment 6
Create a function fetchUserDataAndPosts that takes a user ID and fetches the user details and their posts using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are fetched. Return an object with user details and posts.
API to be used
For user: https://jsonplaceholder.typicode.com/users/${userld}
For post: https://jsonplaceholder.typicode.com/posts?userid=${userid}
*/

function fetchUserDataAndPosts(userId){
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response =>{
            return response.json();
        })
        .then(userData =>{
            return fetch(`https://jsonplaceholder.typicode.com/posts?userid=${userId}`)
            .then(response =>{
                return response.json();
            })
            .then(postData =>(
                {
                    user : userData,
                    post : postData
                }
                //console.log(userData,postData);
            ))
        })
    }
fetchUserDataAndPosts(1).then(data =>{
    console.log(data);
})






