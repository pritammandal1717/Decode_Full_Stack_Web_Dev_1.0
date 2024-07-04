/**
6. You have a list of expenses, each with an amount and a category. Now, create a function named categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or "Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array called categorized Expenses, where each element represents the category for the corresponding expense in the original list. Finally, print out the categorized Expenses array.
 */

let expenses = [
    { amount: 100, category: "Utilities" }, 
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];

function categorizeExpense(amount){
    if (amount > 100){
        return "High Expense"
    }else{
        return "Low Expense"
    }
}

const categorizedExpenses = expenses.map( data => categorizeExpense(data.amount))
console.log(categorizedExpenses)