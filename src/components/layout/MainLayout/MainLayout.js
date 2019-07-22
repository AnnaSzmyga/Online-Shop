import React from 'react';
import Navbar from '../Navbar/Navbar';
import PageContainer from '../PageContainer/PageContainer';
import Footer from '../Footer/Footer';

const MainLayout = ({products}) => {
    return (
        <div>
            <Navbar />
            <PageContainer products={products} />
            <Footer />
        </div>
    )
}

export default MainLayout;