/**
4. Create two objects personl and person2 with properties name and age. Create a function "introduce" that prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself using the introduce function.
 */

function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`)
}
const person1 = {
    name: "John",
    age: 21
}

const person2 = {
    name: "Marry",
    age: 20
}

introduce.call(person2)