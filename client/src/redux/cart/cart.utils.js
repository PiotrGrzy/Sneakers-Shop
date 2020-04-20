export const addItem = (cartItems, newItem) => {
  const itemExists = cartItems.find((cartItem) => cartItem.id === newItem.id);
  // if item exists increase quantity by 1
  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if item doesnt exist create new one and set quantity to 1
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const decreaseQuantity = (cartItems, itemToDecrease) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrease.id
  );
  // if item quantity is 1, remove item from cart
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrease.id);
  }
  // else decrease quantity by 1
  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
