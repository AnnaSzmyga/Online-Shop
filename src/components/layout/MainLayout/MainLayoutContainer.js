import {connect} from 'react-redux';
import MainLayout from './MainLayout';
import { selectCategory } from '../../../redux/productsActions';

const mapStateToProps = state => ({
  products: state.products
});
const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch(selectCategory(category))

});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);