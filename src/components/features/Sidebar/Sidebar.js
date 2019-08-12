import React from 'react';
import Sorting from '../Sorting/Sorting';
import CategoriesList from '../CategoriesList/CategoriesList';
import Ornament from '../../common/Ornament/Ornament';
import PropTypes from 'prop-types';

import './Sidebar.scss';

const Sidebar = ({sortAscend, sortDescend, sortAZ, sortZA, filterCategory, toggleActiveClassName, sidebarShow, activeCategory, activeSorting}) => {

    const sidebarClassName = (sidebarShow) ? "sidebar" : "sidebar sidebar-hidden"
    return (
        <div className={sidebarClassName}>
            <CategoriesList
                filterCategory={filterCategory}
                toggleActiveClassName={toggleActiveClassName}
                //activeSorting={activeSorting}
            />
            <Ornament />
            <Sorting
                onSortAscend={sortAscend}
                onSortDescend={sortDescend}
                onSortAZ={sortAZ}
                onSortZA={sortZA}
                toggleActiveClassName={toggleActiveClassName}
                //activeCategory={activeCategory}
            />
            <Ornament />
        </div>
    )
}

Sidebar.propTypes = {
    sortAscend: PropTypes.func,
    sortDescend: PropTypes.func,
    sortAZ: PropTypes.func,
    sortZA: PropTypes.func,
    filterCategory: PropTypes.func
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