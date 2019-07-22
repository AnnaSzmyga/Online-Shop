import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import FAQ from '../../pages/FAQ/FAQ';
import Regulations from '../../pages/Regulations/Regulations';
import Contact from '../../pages/Contact/Contact';
import Cart from '../../pages/Cart/Cart';
import NoMatch from '../../pages/NoMatch/NoMatch';
//import ProductPage from '../../pages/ProductPage/ProductPage';


const PageContainer = (props) => {
  return (
          <div>
          {props.products[0].id}
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/faq"} exact component={FAQ} />
              <Route path={"/regulations"} exact component={Regulations} />
              <Route path={"/contact"} exact component={Contact} />
              <Route path={"/cart"} exact component={Cart} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        )
}

// class PageContainer extends React.Component {

//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route path={"/"} exact component={Home} />
//           <Route path={"/faq"} exact component={FAQ} />
//           <Route path={"/regulations"} exact component={Regulations} />
//           <Route path={"/contact"} exact component={Contact} />
//           <Route path={"/cart"} exact component={Cart} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     )
//   }
// }

export default PageContainer;

//<Route path={"/products/:id"} exact component={ProductPage} />