import React from 'react';

import './FilterButton.scss';

const FilterButton = ({toggleSidebar, sidebarShow}) => {
        const buttonText = (sidebarShow) ? "schowaj filtry" : "pokaż filtry"
        return (
                <div className="filter-button" onClick={toggleSidebar}>
                        <span>{buttonText}</span>
                        <i className="fas fa-filter filter-button__icon"></i>
                </div>
        )
}

export default FilterButton;