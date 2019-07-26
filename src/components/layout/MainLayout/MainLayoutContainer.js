import {connect} from 'react-redux';
import MainLayout from './MainLayout';
//import { selectCategory, sortAsc, sortDesc, sortAZ, sortZA } from '../../../redux/productsActions';
import { addProduct, removeProduct } from '../../../redux/cartActions';

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  addProduct: (product) => dispatch(addProduct(product)),
  removeProduct: (id) => dispatch(removeProduct(id))
  // selectCategory: (category) => dispatch(selectCategory(category)),
  // sortAsc: () => dispatch(sortAsc()),
  // sortDesc: () => dispatch(sortDesc()),
  // sortAZ: () => dispatch(sortAZ()),
  // sortZA: () => dispatch(sortZA())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);