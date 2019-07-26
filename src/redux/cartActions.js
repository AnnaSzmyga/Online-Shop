export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';



export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
};

export function removeProduct(id) {
    return {
        type: REMOVE_PRODUCT,
        id
    }
};

export function clearCart() {
    return {
        type: CLEAR_CART,
    }
};