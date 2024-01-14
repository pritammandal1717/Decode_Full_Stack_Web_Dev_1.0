// Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
// method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
// processin, fee associated with each payment method. 
// For example, "credit" may have a processing fee of 2%, "debit" 1.5%, and "paypal" 3%.

let payment_method = "debit";

switch (payment_method) {
    case "credit":
        console.log("Processing Fee for Credit: 2%");
        break;
    case "debit":
        console.log("Processing Fee for Debit: 1.5%");
        break;
    case "paypal":
        console.log("Processing Fee for PayPal: 3%");
        break;
    default:
        console.log("Invalid Payment Method");
}