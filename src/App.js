import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Home from './components/pages/Home/Home';
// import ProductPage from './components/pages/ProductPage/ProductPage';
// import Cart from './components/pages/Cart/Cart';
// import Contact from './components/pages/Contact/Contact';

import MainLayout from './components/layout/MainLayout/MainLayout';

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "okulary"
      },
      {
        id: 2,
        name: "lusterko"
      },
      {
        id: 3,
        name: "kubek"
      }
    ]
  }
  render() {
    return (
      <Router>
        <MainLayout products={this.state.products} />
      </Router>
    )
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <MainLayout>
//           <Navbar />
//           <PagesContainer>
//             <Switch>
//               <Route path={"/"} exact component={Home} />
//               <Route path={"/products/:id"} exact component={ProductPage} />
//               <Route path={"/cart"} exact component={Cart} />
//               <Route path={"/contact"} exact component={Contact} />
//             </Switch>
//           </PagesContainer>
//           <Footer />
//         </MainLayout>
//       </BrowserRouter>
//     )
//   }
// }

export default App;
