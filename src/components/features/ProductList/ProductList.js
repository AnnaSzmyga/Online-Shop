import React from 'react';
import Product from '../Product/Product';
import Pagination from '../Pagination/Pagination';

import { Row } from 'reactstrap';
import './ProductList.css';

const ProductList = ({products, addToCart, currentPage, productsPerPage, changeCurrentPage}) =>{

    const firstProductIndex = (productsPerPage * currentPage) - productsPerPage;
    const lastProductIndex = firstProductIndex + productsPerPage;
    const currentProducts = products.slice(firstProductIndex, lastProductIndex);

    return (
        <div className="products">
            <Row>
                {
                    currentProducts.map((product) => {
                        return <Product product={product} addToCart={addToCart} key={product.id} />
                    })
                }
            </Row>
            <Pagination pagesNumber={Math.ceil(products.length / 6)} changeCurrentPage={changeCurrentPage} />
        </div>
    )
}

export default ProductList;