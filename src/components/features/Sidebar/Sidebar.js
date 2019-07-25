import React from 'react';
import Sorting from '../Sorting/Sorting';
import CategoriesList from '../CategoriesList/CategoriesList';

import './Sidebar.css';

const Sidebar = ({products, sortAscend, sortDescend, sortAZ, sortZA, filterCategory}) => {
    return (
        <div className="sidebar">
            <Sorting
                onSortAscend={sortAscend}
                onSortDescend={sortDescend}
                onSortAZ={sortAZ}
                onSortZA={sortZA}
            />
            <CategoriesList  filterCategory={filterCategory} />
        </div>
    )
}



// const Sidebar = ({products, sortAsc, sortDesc, sortAZ, sortZA}) => {
//     return (
//         <div className="sidebar">
//             <Sorting
//                 onSortAsc={sortAsc}
//                 onSortDesc={sortDesc}
//                 onSortAZ={sortAZ}
//                 onSortZA={sortZA}
//             />
//             <CategoriesList />
//         </div>
//     )
// }

export default Sidebar;