export const addItem = (cartItems, newItem) => {
  const itemExists = cartItems.find(cartItem => cartItem.id === newItem.id);

  if (itemExists) {
    return cartItems.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const decreaseQuantity = (cartItems, itemToDecrease) => {
  const existingItem = cartItems.find(
    cartItem => cartItem.id === itemToDecrease.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToDecrease.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === itemToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
