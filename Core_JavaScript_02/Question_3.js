/**
3. Create a Map to store contact information (name, age, email, location) and implement a function to retrieve contact details by name.
 */

const contactInfo = new Map();
contactInfo.set('John', {age: 25 , email: 'johndoe1@bs.com', location: 'Delhi'})
contactInfo.set('Marry', {age: 22 , email: 'marrym3@bs.com', location: 'Kolkata'})
contactInfo.set('Jack', {age: 27 , email: 'jackk22@bs.com', location: 'Mumbai'})
console.log(contactInfo.get("Marry"))
console.log(contactInfo.get("Jack"))