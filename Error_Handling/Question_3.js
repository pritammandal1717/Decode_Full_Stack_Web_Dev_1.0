/**
3. You are developing a payment processing module for an e-commerce platform. Implement error handling for the payment transaction process. Create a function processPayment that simulates processing a payment transaction. The function should take payment details (amount, card number, expiration date) as parameters and throw errors under certain conditions:

    • If the payment amount is not a positive number, throw an error indicating "Invalid payment amount."
    • If the card number is not provided or is not a valid credit card number, throw an error indicating "Invalid card number."
    • If the expiration date is not provided or is in the past, throw an error indicating "Invalid expiration date."

    try {
        processPayment (58.25, "1234-5678-9812-3456", "12/25");
        process Payment(-10, "invalidCardNumber", "05/22"); // Should throw an error: "Invalid payment amount." and "Invalid card number processPayment(100.75, "9876-5432-1898-7654", "01/20"); // Should throw an error: "Invalid expiration date."
    } catch (error) {
        console.error(error.message);
    }
 */

function processPayment(amount, cardNumber, expirationDate){
    const errors = []
    const card = new RegExp(/^\d{4}-\d{4}-\d{4}-\d{4}$/)
    if(amount <= 0){
        errors.push('Invalid payment amount')
    }
    if(!card.test(cardNumber)){
        errors.push('Invalid card number')
    }
    if(!checkExpirationDate(expirationDate)){
        errors.push('Invalid expiration date')
    }
    if(errors.length > 0){
        throw new Error(errors.join(" & "));
    }
}

function checkExpirationDate(expirationDate){
    const year = parseInt(new Date().getFullYear().toString().substring(2));
    const month  = new Date().getMonth();

    if(year < parseInt(expirationDate.substring(3, 5))){
        return true;
    }
    else if(year == parseInt(expirationDate.substring(3, 5)) && month <= parseInt(expirationDate.substring(0, 2))){
       return true;
    }
    return false;
}

try {
    //processPayment (58.25, "1234-5678-9812-3456", "12/25");
    //processPayment(-10, "invalidCardNumber", "05/22"); //Should throw an error:"Invalidpaymentamount." and "Invalid card number" 
    processPayment(100.75, "9876-5432-1898-7654", "01/20"); // Should throw an error: "Invalid expiration date."
} catch (error) {
    console.error(error.message);
}