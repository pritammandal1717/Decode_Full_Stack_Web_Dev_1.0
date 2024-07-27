/** 
Assignment 1
Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after a delay of 1 second.
*/

function sumAsync(num1, num2){
    setTimeout(() => {
        console.log(num1+num2)
    }, 1000)
}

function sum(fn){
    return fn;
}

sum(sumAsync(1,2));