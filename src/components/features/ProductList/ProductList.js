import React from 'react';
import Product from '../Product/Product';
import Pagination from '../Pagination/Pagination';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import './ProductList.scss';

const ProductList = ({products, addToCart, currentPage, productsPerPage, changeCurrentPage,}) =>{

    const firstProductIndex = (productsPerPage * currentPage) - productsPerPage;
    const lastProductIndex = firstProductIndex + productsPerPage;
    const currentProducts = products.slice(firstProductIndex, lastProductIndex);
    const paginationDisplay = (products.length !== 0) ? "flex" : "none";
    const searchingAlertDisplay = (products.length !== 0) ? "none" : "block";

    return (
        <div className="products">
            <p className="products__searching-alert" style={{display: searchingAlertDisplay}}>Nie znaleziono żadnych wyników wyszukiwania.</p>
            <Row>
                {
                    currentProducts.map((product) => {
                        return <Product product={product} addToCart={addToCart} key={product.id} />
                    })
                }
            </Row>
            <Pagination
                pagesNumber={Math.ceil(products.length / 6)}
                currentPage={currentPage}
                changeCurrentPage={changeCurrentPage}
                paginationDisplay={paginationDisplay}
            />
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array,
    addToCart: PropTypes.func,
    productsPerPage: PropTypes.number,
    currentPage: PropTypes.number,
    changeCurrentPage: PropTypes.func
}

export default ProductList;