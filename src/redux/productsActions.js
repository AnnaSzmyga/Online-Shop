export const SORT_ASCEND = 'SORT_ASC';
export const SORT_DESCEND = 'SORT_DESC';
export const SORT_AZ = 'SORT_AZ';
export const SORT_ZA = 'SORT_ZA';
export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const RESET_FILTERING = 'RESET_FILTERING';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';


export function sortAscend() {
    return {
        type: SORT_ASCEND,
    }
};

export function sortDescend() {
    return {
        type: SORT_DESCEND,
    }
};

export function sortAZ() {
    return {
        type: SORT_AZ,
    }
};

export function sortZA() {
    return {
        type: SORT_ZA,
    }
};

export function filterCategory(category) {
    return {
        type: FILTER_CATEGORY,
        category
    }
};

export function resetFiltering() {
    return {
        type: RESET_FILTERING,
    }
};

export function searchProducts(text) {
    return {
        type: SEARCH_PRODUCTS,
        text
    }
};

