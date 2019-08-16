import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ itemCount, toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
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
