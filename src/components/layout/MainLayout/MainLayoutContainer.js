import {connect} from 'react-redux';
import MainLayout from './MainLayout';
import { selectCategory, sortAsc, sortDesc, sortAZ, sortZA } from '../../../redux/productsActions';

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch(selectCategory(category)),
  sortAsc: () => dispatch(sortAsc()),
  sortDesc: () => dispatch(sortDesc()),
  sortAZ: () => dispatch(sortAZ()),
  sortZA: () => dispatch(sortZA())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);