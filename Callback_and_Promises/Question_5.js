/** 
Assignment 5
Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The function should multiply each element of the array by 2 and pass the result to the callback.
*/

function multiplyWithCallback(numArray, fn){
    console.log(fn(numArray))
}

function multiplyBy2(arr){
    const result = arr.map(element => {
        return element *= 2;
    });
    return result;
}

const nums = [1, 2, 3, 4, 5]

multiplyWithCallback(nums, multiplyBy2);
