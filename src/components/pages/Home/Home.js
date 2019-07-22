import React from 'react';
import ProductList from '../../features/ProductList/ProductList';

const Home = (props) => {
    return (
        <div>Home
            <ProductList products={props.products} />
        </div>
    )
}

export default Home;