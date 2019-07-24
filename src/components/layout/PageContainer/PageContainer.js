import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import FAQ from '../../pages/FAQ/FAQ';
import Regulations from '../../pages/Regulations/Regulations';
import Contact from '../../pages/Contact/Contact';
import Cart from '../../pages/Cart/Cart';
import NoMatch from '../../pages/NoMatch/NoMatch';
import ProductPage from '../../pages/ProductPage/ProductPage';

import './PageContainer.css';

const PageContainer = ({products}) => {
  return (
          <div className="pageContainer">
            <Switch>
              <Route path={"/"} exact render={(props) => <Home {...props} products={products} />} />} />
              <Route path={"/faq"} exact component={FAQ} />
              <Route path={"/regulations"} exact component={Regulations} />
              <Route path={"/contact"} exact component={Contact} />
              <Route path={"/cart"} exact component={Cart} />
              <Route path={"/cakes/:id"} render={(props) => <ProductPage {...props} products={products} />} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        )
}


export default PageContainer;
