/**
3. In this coding challenge let's try to implement the cart feature using javascript closure. Using JS closures try to create a cart array and return a function to getCartitems.

    const cart = shoppingCart();
    console.log('Cart Items:", cart.getCartItems());

    // OUTPUT: Cart Items: []
 */

function shoppingCart(){
    let cart = new Array();
    function getCartItems() {
        return cart.slice();
    }

    return {getCartItems};
}

const cart = shoppingCart();
console.log('Cart Items:', cart.getCartItems());