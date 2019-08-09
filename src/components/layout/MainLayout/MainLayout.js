import React from 'react';
import Navbar from '../Navbar/Navbar';
import PageContainer from '../PageContainer/PageContainer';
import Footer from '../Footer/Footer';

import './MainLayout.scss';

const MainLayout = ({products, cart, addProduct, removeProduct, clearCart, changeQuantity}) => {
    return (
        <div className="main-layout">
            <Navbar cartContent={cart.length}/>
            <PageContainer
                products={products}
                cart={cart}
                addProduct={addProduct}
                removeProduct={removeProduct}
                clearCart={clearCart}
                changeQuantity={changeQuantity}
                // sortAscend={sortAscend}
                // sortDescend={sortDescend}
                // sortAZ={sortAZ}
                // sortZA={sortZA}
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