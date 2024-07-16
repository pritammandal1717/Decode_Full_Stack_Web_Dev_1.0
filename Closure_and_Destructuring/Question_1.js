/**
1. You are building a counter application that tracks the number of times a button is clicked. Implement the counter using closure.
 */

function count(){
    let count = 0;
    return function(){
        count++;
        console.log(count)
    }
}

const counter = count()

counter()
counter()
counter()