import React from 'react';
//import { Switch, Route } from 'react-router-dom';
import Sidebar from '../../features/Sidebar/Sidebar';
import ProductList from '../../features/ProductList/ProductList';

import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
            activeCategory: '',
            activeSorting: '',
            activePage: 1
        };
        console.log(props);
    }
    sortAscend = () => {
        let products = (this.state.activeCategory !== '') ? this.state.products : this.props.products;
        products.sort((a, b) => {
            return a.price - b.price;
          });
        this.setState({products, activeSorting: "price_asc"});
    }
    sortDescend = () => {
        let products = (this.state.activeCategory !== '') ? this.state.products : this.props.products;
        products.sort((a, b) => {
            return b.price - a.price;
          });
        this.setState({products, activeSorting: "price_desc"});
    }
    sortAZ = () => {
        let products = (this.state.activeCategory !== '') ? this.state.products : this.props.products;
        products.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        this.setState({products, activeSorting: "name_asc"});
    }
    sortZA = () => {
        let products = (this.state.activeCategory !== '') ? this.state.products : this.props.products;
        products.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
        this.setState({products, activeSorting: "name_desc"});
    }
    filterCategory = (category) => {
        let products = [];
        // products.filter((product) => {category === product.category});
        // dlaczego wyrzuca błąd?
        this.props.products.forEach((product) => {
            if (product.category === category) {
                products.push(product);
            }
        });

        this.setState({
            products,
            activeCategory: category
        });
        console.log(category);
    }
    render() {
        return (
            <div className="home">
                <Sidebar
                    sortAscend={this.sortAscend}
                    sortDescend={this.sortDescend}
                    sortAZ={this.sortAZ}
                    sortZA={this.sortZA}
                    filterCategory={this.filterCategory}
                    //activeCategory={this.state.activeCategory}
                    //activeSorting={this.state.activeSorting}
                />
                <ProductList products={this.state.products} addToCart={this.props.addToCart} />

            </div>
        )
    }
}
//path={"/category=:category(\\d+)&sort_by=:sorting"}







// const Home = ({products, sortAscend, sortDescend, sortAZ, sortZA, addToCart}) => {
//     console.log(sortAZ);
//     console.log(products);
//     return (
//         <div className="home">
//             <Sidebar
//                 products={products}
//                 sortAscend={sortAscend}
//                 sortDescend={sortDescend}
//                 sortAZ={sortAZ}
//                 sortZA={sortZA}
//                 filterCategory={() => {console.log("filterCategory")}}
//             />
//             <ProductList products={products} addToCart={addToCart} />
//         </div>
//     )
// }

export default Home;