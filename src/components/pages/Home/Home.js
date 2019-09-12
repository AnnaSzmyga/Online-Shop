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
            currentPage: 1,
            productsPerPage: 6,
            showSidebar: false
        };
    }

    componentWillMount = () => {
        let category = (this.props.match.params.category === undefined) ? 'non' : this.props.match.params.category;
        let sorting = (this.props.match.params.sorting === undefined) ? 'non' : this.props.match.params.sorting;
        this.props.setActiveFilter(category, sorting);
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
        if (clickedItemClass === "category__link") {
            document.querySelectorAll('.sorting__item').forEach((item) => item.classList.remove('active-filter'));
        };
    }

    toggleSidebar = () => {
        this.setState({sidebarShow: !this.state.sidebarShow});
    }

    render() {
        return (
            <Fade timeout={100}>
                <div className="home">
                    <Sidebar
                        sortAscend={this.props.sortAscend}
                        sortDescend={this.props.sortDescend}
                        sortAZ={this.props.sortAZ}
                        sortZA={this.props.sortZA}
                        filterCategory={this.props.filterCategory}
                        activeFilter={this.props.activeFilter}
                        searchingText={this.props.searchingText}
                        handleTextChange={this.props.handleTextChange}
                        handleSearching={this.props.handleSearching}
                        toggleActiveClassName={this.toggleActiveClassName}
                        sidebarShow={this.state.sidebarShow}
                    />
                    <ProductList
                        products={this.props.products}
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
    sortAZ: PropTypes.func,
    sortZA: PropTypes.func,
    sortAscend: PropTypes.func,
    sortDescend: PropTypes.func,
    filterCategory: PropTypes.func,
    searchProducts: PropTypes.func,
    isFiltered: PropTypes.bool,
    addToCart: PropTypes.func
}


export default Home;