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
            }
        }
    }

    // sortAscend = () => {
    //     this.props.sortAscend();
    //     //this.setState({searchingAlert: "none"});
    // }

    // sortDescend = () => {
    //     this.props.sortDescend();
    //     //this.setState({searchingAlert: "none"});
    // }

    // sortAZ = () => {
    //     this.props.sortAZ();
    //     //this.setState({searchingAlert: "none"});
    // }

    // sortZA = () => {
    //     this.props.sortZA();
    //     //this.setState({searchingAlert: "none"});
    // }

    filterCategory = (category) => {
        this.props.filterCategory(category)
        this.setState({
            currentPage: 1,
            //searchingAlert: "none"
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
        this.setState({searchingAlert: (this.props.products.length !== 0) ? "none" : "block"});

        // document.querySelectorAll(".active-filter").forEach((item) => {
        //     item.classList.remove('active-filter');
        // });

        // if (this.props.products.length !== 0) {
        //     this.setState({
        //         searchingText: '',
        //         searchingAlert: "none"
        //     });
        //     document.querySelectorAll(".active-filter").forEach((item) => {
        //         item.classList.remove('active-filter');
        //     });
        // } else {
        //     this.setState({
        //         searchingText: '',
        //         searchingAlert: "block"
        //     });
        // }
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
                        //searchingAlert={this.state.searchingAlert}
                    />
                    <FilterButton toggleSidebar={this.toggleSidebar} sidebarShow={this.state.sidebarShow} />
                </div>
            </Fade>
        )
    }
}


Home.propTypes = {
    products: PropTypes.array,
    isFiltered: PropTypes.bool,
    addToCart: PropTypes.func
}


export default Home;