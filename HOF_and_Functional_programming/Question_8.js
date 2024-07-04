/**
8. Using the same array of numbers, use the forEach method to collect and store only the even numbers in a new array.
 */

let originalNumbers = [2, 5, 8, 10, 3];

const even_arr = [];

originalNumbers.forEach(num =>{
    if(num % 2 == 0){
        even_arr.push(num)
    }
});

console.log(even_arr)