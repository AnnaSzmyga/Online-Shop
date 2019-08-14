import React from 'react';
import Product from '../Product/Product';
import Pagination from '../Pagination/Pagination';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import './ProductList.scss';

const ProductList = ({products, addToCart, currentPage, productsPerPage, changeCurrentPage, searchingAlert}) =>{

    const firstProductIndex = (productsPerPage * currentPage) - productsPerPage;
    const lastProductIndex = firstProductIndex + productsPerPage;
    const currentProducts = products.slice(firstProductIndex, lastProductIndex);
    const paginationDisplay = (searchingAlert === "none") ? "flex" : "none"

    return (
        <div className="products">
            <p className="products__searching-alert" style={{display: searchingAlert}}>Nie znaleziono żadnych wyników wyszukiwania.</p>
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
    changeCurrentPage: PropTypes.func,
    searchingAlert: PropTypes.string
}

export default ProductList;