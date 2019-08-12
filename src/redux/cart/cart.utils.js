// export const addItemToCart = (cartItems, cartItemToAdd) => {
//   let existingCartItemIndex = -1;
//   cartItems.forEach((cartItem, index) => {
//     if (cartItem.id === cartItemToAdd.id) existingCartItemIndex = index;
//   });
//   if (existingCartItemIndex === -1) {
//     return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
//   } else {
//     cartItems[existingCartItemIndex] = {
//       ...cartItems[existingCartItemIndex],
//       quantity: cartItems[existingCartItemIndex].quantity + 1,
//     };
//     return cartItems;
//   }
// };

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// export const removeItemFromCart = (cartItems, cartItemToAdd) => {
//   let newCartItems = [];
//   cartItems.forEach(cartItem => {
//     if (cartItem.id === cartItemToAdd.id) {
//       if (cartItem.quantity !== 1) {
//         newCartItems = [
//           ...newCartItems,
//           { ...cartItem, quantity: cartItem.quantity - 1 },
//         ];
//       }
//     } else {
//       newCartItems = [...newCartItems, cartItem];
//     }
//   });
//   return newCartItems;
// };

export const removeItemFromCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
