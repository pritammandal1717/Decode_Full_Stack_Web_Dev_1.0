/**
2. You have an object representing a customer order with properties orderld, productName, and quantity. Use destructuring to extract and print these properties.
    
    let order = {
        orderId: "123456",
        productName: "Laptop",
        quantity: 2,
    };

 */

let order = {
    orderId: "123456",
    productName: "Laptop",
    quantity: 2,
};

const getOrderInfo = ({orderId, productName, quantity}) => {
    return `OrderId = ${orderId}, Product Name = ${productName}, Quantity = ${quantity}`
}

console.log(getOrderInfo(order));
