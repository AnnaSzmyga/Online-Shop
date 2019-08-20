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
            activeFilter: {
                activeCategory: (this.props.isFiltered) ? this.props.match.params.category : 'non',
                activeSorting: (this.props.isFiltered) ? this.props.match.params.sorting : 'non'
            },
            searchingText: '',
            searchingAlert: "none",
            currentPage: 1,
            productsPerPage: 6,
            showSidebar: false
        };
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
        });
    }

    filterCategory = (category) => {
        this.props.filterCategory(category)
        this.setState({
            currentPage: 1
        });
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
                        filterCategory={this.filterCategory}
                        activeFilter={this.state.activeFilter}
                        setActiveFilter={this.setActiveFilter}
                        searchingText={this.state.searchingText}
                        handleTextChange={this.handleTextChange}
                        handleSearching={this.handleSearching}
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