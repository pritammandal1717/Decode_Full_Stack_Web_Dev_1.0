/**
6.  Create a simple JavaScript function named displayinfo that takes two parameters (name and role) and logs a message.
    Use call to invoke the displayinfo function with specific arguments.
    Use apply to invoke the displayInfo function with arguments passed as an array.
    Create another function named greet that logs a greeting with this context.
    Use bind to create a new function boundGreet with a specific context and log the greeting.
 */

// Function : displayInfo
function displayInfo(name, role){
    console.log(`Hello ${name}! You are a ${role}. You are ${this.age} years old`)
}

// Function : greet
function greet(year){
    console.log(`Happy Birthday ${this.name} :) It's your ${year}th birthday.`)
}

const person = {
    age: 25,
}

const person1 = {
    name: "Marry",
}

// call()
displayInfo.call(person, "John", "Student")
// apply()
displayInfo.apply(person, ["John", "Student"])
// bind()
const boundGreet = greet.bind(person1)
boundGreet(20)