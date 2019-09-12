import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import FAQ from '../../pages/FAQ/FAQ';
import Regulations from '../../pages/Regulations/Regulations';
import Contact from '../../pages/Contact/Contact';
import Cart from '../../pages/Cart/Cart';
import NoMatch from '../../pages/NoMatch/NoMatch';
import ProductPage from '../../pages/ProductPage/ProductPage';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import './PageContainer.scss';

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeFilter: {
            activeCategory: 'non',
            activeSorting: 'non'
        },
        searchingText: '',
        searchingAlert: "none"
    };
    //const {products, sortAZ, sortZA, sortAscend, sortDescend, filterCategory, searchProducts, cart, addProduct, removeProduct, clearCart, changeQuantity} = this.props;
  }

  componentWillMount() {

    if (this.state.activeFilter.activeCategory !== 'non') {
      this.filterCategory(this.state.activeFilter.activeCategory);
    }
    if (this.state.activeFilter.activeSorting !== 'non') {
        switch (this.state.activeFilter.activeSorting) {
            case 'sortAZ':
                this.props.sortAZ();
                break;
            case 'sortZA':
                this.props.sortZA();
                break;
            case 'sortAscend':
                this.props.sortAscend();
                break;
            case 'sortDescend':
                this.props.sortDescend();
                break;
            default:
                break;
        }
    }
  }
  setActiveFilter = (activeCategory, activeSorting) => {
    this.setState({
      activeFilter: {
        activeCategory,
        activeSorting
      }
    })
  }

  handleTextChange = (e) => {
    const searchingText = e.target.value;
    this.setState({searchingText});
  }

  handleSearching = (e) => {
    e.preventDefault();
    this.props.searchProducts(this.state.searchingText);
    this.setState({searchingText: ''});
  }

  render() {
    return (
      <div className="page-container">
        <Container>
          <Switch>
            <Route
              path={["/", "/category=:category&sorting=:sorting"]}
              exact
              render={(props) =>
                <Home
                  {...props}
                  products={this.props.products}
                  addToCart={this.props.addProduct}
                  sortAZ={this.props.sortAZ}
                  sortZA={this.props.sortZA}
                  sortAscend={this.props.sortAscend}
                  sortDescend={this.props.sortDescend}
                  filterCategory={this.props.filterCategory}
                  searchingText={this.state.searchingText}
                  handleSearching={this.handleSearching}
                  handleTextChange={this.handleTextChange}
                  searchingAlert={this.state.searchingAlert}
                  activeFilter={this.state.activeFilter}
                  setActiveFilter={this.setActiveFilter}
                />
              }
            />
            <Route path={"/faq"} exact component={FAQ} />
            <Route path={"/regulations"} exact component={Regulations} />
            <Route path={"/contact"} exact component={Contact} />
            <Route
              path={"/cart"}
              exact
              render={(props) =>
                <Cart
                  {...props}
                  cartProducts={this.props.cart}
                  removeProduct={this.props.removeProduct}
                  clearCart={this.props.clearCart}
                  changeQuantity={this.props.changeQuantity}
                />
              }
            />
            <Route path={"/cakes/:id"} render={(props) => <ProductPage {...props} products={this.props.products} addProduct={this.props.addProduct} />} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </div>
    )
  }
}
// const PageContainer = ({products, sortAZ, sortZA, sortAscend, sortDescend, filterCategory, searchProducts, cart, addProduct, removeProduct, clearCart, changeQuantity}) => {

// }

// const PageContainer = ({products, sortAZ, sortZA, sortAscend, sortDescend, filterCategory, searchProducts, cart, addProduct, removeProduct, clearCart, changeQuantity}) => {
//   return (
//     <div className="page-container">
//       <Container>
//         <Switch>
//           <Route
//             path={"/"}
//             exact
//             render={(props) =>
//               <Home
//                 {...props}
//                 products={products}
//                 addToCart={addProduct}
//                 sortAZ={sortAZ}
//                 sortZA={sortZA}
//                 sortAscend={sortAscend}
//                 sortDescend={sortDescend}
//                 filterCategory={filterCategory}
//                 searchProducts={searchProducts}
//                 isFiltered={false}
//               />
//             }
//           />
//           <Route
//             path={"/category=:category&sorting=:sorting"}
//             render={(props) =>
//               <Home
//                 {...props}
//                 products={products}
//                 addToCart={addProduct}
//                 sortAZ={sortAZ}
//                 sortZA={sortZA}
//                 sortAscend={sortAscend}
//                 sortDescend={sortDescend}
//                 filterCategory={filterCategory}
//                 searchProducts={searchProducts}
//                 isFiltered={true}
//               />
//             }
//           />
//           <Route path={"/faq"} exact component={FAQ} />
//           <Route path={"/regulations"} exact component={Regulations} />
//           <Route path={"/contact"} exact component={Contact} />
//           <Route
//             path={"/cart"}
//             exact
//             render={(props) =>
//               <Cart
//                 {...props}
//                 cartProducts={cart}
//                 removeProduct={removeProduct}
//                 clearCart={clearCart}
//                 changeQuantity={changeQuantity}
//               />
//             }
//           />
//           <Route path={"/cakes/:id"} render={(props) => <ProductPage {...props} products={products} addProduct={addProduct} />} />
//           <Route component={NoMatch} />
//         </Switch>
//       </Container>
//     </div>
//   )
// }

PageContainer.propTypes = {
  products: PropTypes.array,
  sortAZ: PropTypes.func,
  sortZA: PropTypes.func,
  sortAscend: PropTypes.func,
  sortDescend: PropTypes.func,
  filterCategory: PropTypes.func,
  searchProducts: PropTypes.func,
  cart: PropTypes.array,
  addProduct: PropTypes.func,
  removeProduct: PropTypes.func,
  clearCart: PropTypes.func,
  changeQuantity: PropTypes.func
}

export default PageContainer;
