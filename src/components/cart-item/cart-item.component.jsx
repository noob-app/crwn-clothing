import React from 'react';
// import { connect } from 'react-redux';
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from './cart-item.styles';
// import { createStructuredSelector } from 'reselect';
// import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;

// const mapStateToProps = (state, ownProps) => {
//   const cartItems = selectCartItems(state);
//   const newItem = cartItems.filter(each => each.id === ownProps.item.id)[0];
//   return { newItem };
// };

// export default connect(mapStateToProps)(CartItem);
