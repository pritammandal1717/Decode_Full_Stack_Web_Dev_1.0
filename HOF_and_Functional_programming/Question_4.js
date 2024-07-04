/**
4. Using the same array of expense objects, use the filter method to create a new array that includes only the expenses related to the category "Groceries."
 */

let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];

const new_expense = expenses.filter(data => data.category == "Groceries");

console.log(new_expense);