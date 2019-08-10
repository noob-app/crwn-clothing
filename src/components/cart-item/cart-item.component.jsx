import React from 'react';
import { connect } from 'react-redux';
import './cart-item.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartItem = ({ newItem: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const cartItems = selectCartItems(state);
  const newItem = cartItems.filter(each => each.id === ownProps.item.id)[0];
  return { newItem };
};

export default connect(mapStateToProps)(CartItem);
