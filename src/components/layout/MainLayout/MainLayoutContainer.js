import {connect} from 'react-redux';
import MainLayout from './MainLayout';
import { sortAZ, sortZA, sortAscend, sortDescend, filterCategory, resetFiltering } from '../../../redux/productsActions';
import { addProduct, removeProduct, clearCart, changeQuantity } from '../../../redux/cartActions';

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  sortAZ: () => dispatch(sortAZ()),
  sortZA: () => dispatch(sortZA()),
  sortAscend: () => dispatch(sortAscend()),
  sortDescend: () => dispatch(sortDescend()),
  filterCategory: (category) => dispatch(filterCategory(category)),
  resetFiltering: () => dispatch(resetFiltering()),
  addProduct: (product) => dispatch(addProduct(product)),
  removeProduct: (id) => dispatch(removeProduct(id)),
  clearCart: () => dispatch(clearCart()),
  changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);