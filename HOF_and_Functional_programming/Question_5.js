/**
5. Using the same array of expense objects, use the reduce method to calculate the total amount of all expenses.
 */

let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];

const totalAmount = expenses.reduce((prevNum, presentNum) => {
    return prevNum + presentNum.amount
    }, 0);

console.log(`Total amount is : ${totalAmount}`);