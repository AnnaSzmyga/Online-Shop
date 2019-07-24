import React from 'react';
import ProductList from '../../features/ProductList/ProductList';

const Home = (props) => {
    return (
        <div>
            <ProductList products={props.products} />
        </div>
    )
}

export default Home;