/**
5. Continuing the previous coding challenge, now let's implement the remove item from cart feature. On calling the remove item closure function, the specified productid item must be removed from cartitems array. Use javascript closures to achieve the output.

    const cart = shoppingCart();
    console.log('Cart Items:", cart.getCartItems());

    // OUTPUT: Cart Items: []

    const product1 { id: 1, name: 'Product 1', price: 10 };
    const product2=(id: 2, name: 'Product 2, price: 20};
    cart.addItem(product1);
    cart.addItem(product2);
    cart.addItem(product1);
    console.log('Cart Items:', cart.getCartItems());

    // OUTPUT:
    // Cart Items: [
        { id: 1, name: 'Product 1', price: 10, quantity: 2),
        { id: 2, name: 'Product 2, price: 20, quantity: 1 }
        ]
    //
    cart.removeItem(2);
    console.log('Cart Items:', cart.getCartItems());
    // OUTPUT: Cart Items: [ { id: 1, name: 'Product 1', price: 10, quantity: 2}]   
 */

function shoppingCart(){
    let cart = new Array();
    
    function addItem(product){
        const index = cart.findIndex( item => item.id === product.id)
        if (index == -1){
            product.quantity = 1;
            cart.push(product);
        }
        else{
            cart[index].quantity++;
        }
    }
    
    function getCartItems() {
        return cart.slice();
    }

    function removeItem(productId) {

        const index = cart.findIndex(item => item.id === productId)
        cart.splice(index, 1)
    }
        
    return {
        getCartItems,
        addItem, 
        removeItem,   
    };
}
        
const cart = shoppingCart();
console.log('Cart Items:', cart.getCartItems());
    
const product1 = { id: 1, name: 'Product 1', price: 10 };
const product2 = { id: 2, name: 'Product 2', price: 20};
cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);
console.log('Cart Items:', cart.getCartItems());

cart.removeItem(2);
console.log('Cart Items:', cart.getCartItems());