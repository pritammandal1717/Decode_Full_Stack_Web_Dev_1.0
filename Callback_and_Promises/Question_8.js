/** 
Assignment 8
Create a function racePromises that takes an array of promises and returns the result of the first promise that resolves or rejects. Use Promise.race() to implement this.
*/

function racePromises(promises){
    return Promise.race(promises);
}

const promisel = new Promise((resolve, reject) =>
    setTimeout(() => resolve("Promise 1 is resolved"),200) 
);

const promise2 = new Promise((resolve, reject) =>
    setTimeout(() => reject("Promise 2 is rejected"), 300)
);

const promise3 = new Promise((resolve, reject) =>
    setTimeout(() => reject("Promise 3 is rejected"), 100)
);

const promises = [promisel, promise2, promise3]

racePromises(promises).then((response) => {
        console.log(response);
    }).catch( err => {
        console.log(err); 
    });