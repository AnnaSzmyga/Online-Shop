import React from 'react';
import Sorting from '../Sorting/Sorting';
import CategoriesList from '../CategoriesList/CategoriesList';
import Ornament from '../../common/Ornament/Ornament';


import './Sidebar.css';

const Sidebar = ({sortAscend, sortDescend, sortAZ, sortZA, filterCategory, activeCategory, activeSorting}) => {
    return (
        <div className="sidebar">
            <CategoriesList
                filterCategory={filterCategory}
                //activeSorting={activeSorting}
            />
            <Ornament />
            <Sorting
                onSortAscend={sortAscend}
                onSortDescend={sortDescend}
                onSortAZ={sortAZ}
                onSortZA={sortZA}
                //activeCategory={activeCategory}
            />
        </div>
    )
}



// const Sidebar = ({products, sortAscend, sortDescend, sortAZ, sortZA}) => {
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