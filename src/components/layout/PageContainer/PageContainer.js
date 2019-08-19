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

const PageContainer = ({products, sortAZ, sortZA, sortAscend, sortDescend, filterCategory, searchProducts={searchProducts}, cart, addProduct, removeProduct, clearCart, changeQuantity}) => {
  return (
    <div className="page-container">
      <Container>
        <Switch>
          <Route
            path={"/"}
            exact
            render={(props) =>
              <Home
                {...props}
                products={products}
                addToCart={addProduct}
                sortAZ={sortAZ}
                sortZA={sortZA}
                sortAscend={sortAscend}
                sortDescend={sortDescend}
                filterCategory={filterCategory}
                searchProducts={searchProducts}
                isFiltered={false}
              />
            }
          />
          <Route
            path={"/category=:category&sorting=:sorting"}
            render={(props) =>
              <Home
                {...props}
                products={products}
                addToCart={addProduct}
                sortAZ={sortAZ}
                sortZA={sortZA}
                sortAscend={sortAscend}
                sortDescend={sortDescend}
                filterCategory={filterCategory}
                searchProducts={searchProducts}
                isFiltered={true}
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
                cartProducts={cart}
                removeProduct={removeProduct}
                clearCart={clearCart}
                changeQuantity={changeQuantity}
              />
            }
          />
          <Route
                    path={"/test"}
                    render={() => <p>test</p>}
                />
          <Route path={"/cakes/:id"} render={(props) => <ProductPage {...props} products={products} addProduct={addProduct} />} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </div>
  )
}

PageContainer.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.array,
  addProduct: PropTypes.func,
  removeProduct: PropTypes.func,
  clearCart: PropTypes.func,
  changeQuantity: PropTypes.func
}

export default PageContainer;
