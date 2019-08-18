import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {
  ShoppingIcon,
  ItemCountContainer,
  CartIconContainer,
} from './cart-icon.styles';

const CartIcon = ({ itemCount, toggleCart }) => {
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

CartIcon.defaultProps = {
  itemCount: 0,
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartIcon);
