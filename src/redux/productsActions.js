export const SORT_ASC = 'SORT_ASC';
export const SORT_DESC = 'SORT_DESC';
export const SORT_AZ = 'SORT_AZ';
export const SORT_ZA = 'SORT_ZA';


export function sortAsc() {
    return {
        type: SORT_ASC,
    }
};

export function sortDesc() {
    return {
        type: SORT_DESC,
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

