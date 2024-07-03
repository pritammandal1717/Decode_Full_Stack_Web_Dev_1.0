/** 
2. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    Sort the array and find the min and max age.
    Find the median age (one middle item or two middle items divided by two)
    Find the average age (all items divided by number of items)
    Find the range of the ages (max minus min)
    Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sorting the array
ages.sort((a, b) => a - b)
console.log(ages)

// Finding the min and max age
const minAge = ages[0]
const maxAge = ages[ages.length - 1]
console.log(`Min age: ${minAge} and max age: ${maxAge}`)

// Find the median age (one middle item or two middle items divided by two)
const medianAge = ages[ages.length / 2]
console.log(`Median age: ${medianAge}`)

// Find the average age (all items divided by number of items)
let sum = 0
for(i = 0; i < ages.length; i++){
    sum += ages[i]
}
const averageAge = sum / ages.length
console.log(`Average age: ${averageAge}`)

// Find the range of the ages (max minus min)
const rangeOfAge = maxAge - minAge;
console.log(`Range of ages: ${rangeOfAge}`)

// Compare the value of (min - average) and (max - average), use abs() method

const compare1 = minAge - Math.round(averageAge)
const compare2 = maxAge - Math.round(averageAge)
console.log(`Compare1: ${Math.abs(compare1)} and Compare2: ${Math.abs(compare2)}`)

