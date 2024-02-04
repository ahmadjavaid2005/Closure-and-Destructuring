const shoppingCart = function () {
  let cartItems = [];

  return {
    getCartItems: function () {
      return cartItems;
    },
  };
};

// Usage
const cart = shoppingCart();
console.log("Cart Items:", cart.getCartItems()); // Output: Cart Items: []
