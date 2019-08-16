import React from 'react';
import Searching from '../Searching/Searching';
import Sorting from '../Sorting/Sorting';
import CategoriesList from '../CategoriesList/CategoriesList';
import Ornament from '../../common/Ornament/Ornament';
import PropTypes from 'prop-types';

import './Sidebar.scss';

const Sidebar = ({sortAscend, sortDescend, sortAZ, sortZA, filterCategory, activeSorting, activeCategory, searchingText, handleTextChange, handleSearching, toggleActiveClassName, sidebarShow}) => {

    const sidebarClassName = (sidebarShow) ? "sidebar" : "sidebar sidebar-hidden";

    console.log(activeCategory);
    return (
        <div className={sidebarClassName}>
            <Searching
                searchingText={searchingText}
                onTextChange={handleTextChange}
                onSearch={handleSearching}
            />
            <CategoriesList
                filterCategory={filterCategory}
                activeCategory={activeCategory}
                toggleActiveClassName={toggleActiveClassName}
            />
            <Ornament />
            <Sorting
                onSortAscend={sortAscend}
                onSortDescend={sortDescend}
                onSortAZ={sortAZ}
                onSortZA={sortZA}
                activeSorting={activeSorting}
                toggleActiveClassName={toggleActiveClassName}
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
    filterCategory: PropTypes.func,
    searchingText: PropTypes.string,
    handleTextChange: PropTypes.func,
    handleSearching: PropTypes.func,
    toggleActiveClassName: PropTypes.func,
    sidebarShow: PropTypes.bool
}


export default Sidebar;