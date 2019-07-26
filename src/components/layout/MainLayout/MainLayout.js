import React from 'react';
import Navbar from '../Navbar/Navbar';
import PageContainer from '../PageContainer/PageContainer';
import Footer from '../Footer/Footer';

import './MainLayout.css';

const MainLayout = ({products, cart, addProduct, removeProduct}) => {
    return (
        <div className="mainLayout">
            <Navbar />
            <PageContainer
                products={products}
                cart={cart}
                addProduct={addProduct}
                removeProduct={removeProduct}
            />
            <Footer />
        </div>
    )
}

// const MainLayout = ({products, sortAsc, sortDesc, sortAZ, sortZA}) => {
//     return (
//         <div className="mainLayout">
//             <Navbar />
//             <PageContainer
//                 products={products}
//                 sortAsc={sortAsc}
//                 sortDesc={sortDesc}
//                 sortAZ={sortAZ}
//                 sortZA={sortZA}
//             />
//             <Footer />
//         </div>
//     )
// }

export default MainLayout;