import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ totalItems, toggleCart }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{totalItems}</span>
  </div>
);

CartIcon.propTypes = {
  totalItems: PropTypes.number.isRequired,
};

CartIcon.defaultProps = {
  totalItems: 0,
};

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden()),
});
export default connect(
  null,
  mapDispatchToProps,
)(CartIcon);
