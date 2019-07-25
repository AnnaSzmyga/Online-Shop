import React from 'react';
import Sidebar from '../../features/Sidebar/Sidebar';
import ProductList from '../../features/ProductList/ProductList';

import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: this.props.products };
    }
    sortAscend = () => {
        let products = this.props.products;
        products.sort((a, b) => {
            return a.price - b.price;
          });
        this.setState({products});
    }
    sortDescend = () => {
        let products = this.props.products;
        products.sort((a, b) => {
            return b.price - a.price;
          });
        this.setState({products});
    }
    sortAZ = () => {
        let products = this.props.products;
        products.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        this.setState({products});
    }
    sortZA = () => {
        let products = this.props.products;
        products.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
        this.setState({products});
    }
    render() {
        return (
            <div className="home">
                <Sidebar
                    products={this.state.products}
                    sortAscend={this.sortAscend}
                    sortDescend={this.sortDescend}
                    sortAZ={this.sortAZ}
                    sortZA={this.sortZA}
                />
                <ProductList products={this.state.products} />
            </div>
        )
    }
}


// const Home = ({products, sortAsc, sortDesc, sortAZ, sortZA}) => {
//     return (
//         <div className="home">
//             <Sidebar
//                 products={products}
//                 sortAsc={sortAsc}
//                 sortDesc={sortDesc}
//                 sortAZ={sortAZ}
//                 sortZA={sortZA}
//             />
//             <ProductList products={products} />
//         </div>
//     )
// }

export default Home;