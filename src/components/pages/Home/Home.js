import React from 'react';
import Sidebar from '../../features/Sidebar/Sidebar';
import ProductList from '../../features/ProductList/ProductList';
import FilterButton from '../../features/FilterButton/FilterButton';
import { Fade } from 'reactstrap';
import PropTypes from 'prop-types';

import './Home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
            searchingText: '',
            isFiltered: false,
            currentPage: 1,
            productsPerPage: 6,
            showSidebar: false
        };
    }
    sortAscend = () => {
        let products = (this.state.isFiltered) ? this.state.products : this.props.products;
        products.sort((a, b) => {
            return a.price - b.price;
          });
        this.setState({products});
    }
    sortDescend = () => {
        let products = (this.state.isFiltered) ? this.state.products : this.props.products;
        products.sort((a, b) => {
            return b.price - a.price;
          });
        this.setState({products});
    }
    sortAZ = () => {
        let products = (this.state.isFiltered) ? this.state.products : this.props.products;
        products.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        this.setState({products});
    }
    sortZA = () => {
        let products = (this.state.isFiltered) ? this.state.products : this.props.products;
        products.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
        this.setState({products});
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
            isFiltered: true,
            currentPage: 1
        });
    }

    handleTextChange = (e) => {
        const searchingText = e.target.value;
        this.setState({searchingText});
    }

    handleSearching = (e) => {
        e.preventDefault();
        let products = [];
        this.props.products.forEach((product) => {
            if (product.name.toLowerCase().includes(this.state.searchingText.trim().toLowerCase())) {
                products.push(product);
            }
        });
        this.setState({
            products,
            searchingText: ''
        });
        document.querySelectorAll(".active-filter").forEach((item) => {
            item.classList.remove('active-filter');
        });
    }

    changeCurrentPage = (page) => {
        this.setState({ currentPage: page });
    }

    toggleActiveClassName = (e) => {
        const clickedItem = e.target;
        const clickedItemClass = clickedItem.getAttribute("class");
        const items = document.querySelectorAll(`.${clickedItemClass}`);
        items.forEach((item) => {
            item.classList.remove('active-filter');
        });
        clickedItem.classList.add('active-filter');
    }

    toggleSidebar = () => {
        this.setState({sidebarShow: !this.state.sidebarShow})
    }

    render() {
        return (
            <Fade timeout={100}>
                <div className="home">
                    <Sidebar
                        sortAscend={this.sortAscend}
                        sortDescend={this.sortDescend}
                        sortAZ={this.sortAZ}
                        sortZA={this.sortZA}
                        filterCategory={this.filterCategory}
                        searchingText={this.state.searchingText}
                        handleTextChange={this.handleTextChange}
                        handleSearching={this.handleSearching}
                        toggleActiveClassName={this.toggleActiveClassName}
                        sidebarShow={this.state.sidebarShow}
                    />
                    <ProductList
                        products={this.state.products}
                        addToCart={this.props.addToCart}
                        changeCurrentPage={this.changeCurrentPage}
                        currentPage={this.state.currentPage}
                        productsPerPage={this.state.productsPerPage}
                    />
                    <FilterButton toggleSidebar={this.toggleSidebar} sidebarShow={this.state.sidebarShow} />
                </div>
            </Fade>
        )
    }
}

Home.propTypes = {
    products: PropTypes.array,
    addToCart: PropTypes.func
}


export default Home;