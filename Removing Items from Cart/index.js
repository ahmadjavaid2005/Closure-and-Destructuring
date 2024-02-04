// Continuing from Task 4
const shoppingCart = function () {
  let cartItems = [];

  return {
    addItem: function (product) {
      const existingItem = cartItems.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        cartItems.push({ ...product });
      }
    },
    removeItem: function (productId) {
      cartItems = cartItems.filter((item) => item.id !== productId);
    },
    getCartItems: function () {
      return cartItems;
    },
  };
};

// Usage
const cart = shoppingCart();

const product1 = { id: 1, name: "Product 1", quantity: 2, price: 10 };
const product2 = { id: 2, name: "Product 2", quantity: 1, price: 20 };

cart.addItem(product1);
cart.addItem(product2);

// Task No: 5
cart.removeItem(2);
console.log("Cart Items:", cart.getCartItems());
// Output: Cart Items: [ { id: 1, name: 'Product 1', price: 10, quantity: 2 } ]
