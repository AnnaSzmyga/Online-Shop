import {connect} from 'react-redux';
import MainLayout from './MainLayout';
import { addProduct, removeProduct, clearCart, changeQuantity } from '../../../redux/cartActions';

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  addProduct: (product) => dispatch(addProduct(product)),
  removeProduct: (id) => dispatch(removeProduct(id)),
  clearCart: () => dispatch(clearCart()),
  changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);