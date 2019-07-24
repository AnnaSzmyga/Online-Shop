import React from 'react';
import Sidebar from '../../features/Sidebar/Sidebar';
import ProductList from '../../features/ProductList/ProductList';

const Home = ({products}) => {
    return (
        <div>
            <Sidebar products={products} />
            <ProductList products={products} />
        </div>
    )
}

export default Home;