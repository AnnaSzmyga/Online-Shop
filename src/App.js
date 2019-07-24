import React from 'react';

import MainLayoutContainer from './components/layout/MainLayout/MainLayoutContainer';
//import products from './data/data.json';

class App extends React.Component {
  render() {
    return <MainLayoutContainer />
  }
}

// class App extends React.Component {
//   state = {products};
//   render() {
//     return <MainLayout products={this.state.products} />
//   }
// }


export default App;
