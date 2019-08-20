import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART, CHANGE_QUANTITY } from './cartActions';

/* INITIAL STATE */

const initialState = [];

/* REDUCER */

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
        let doubbleProduct = false;

        // check if product is already in the cart
        state.map((product) => {
            if (product.id === action.product.id) {
                doubbleProduct = true;
            }
            return product;
        });

        //add new product to cart
        if (!doubbleProduct) {
            const cartProduct = action.product;
            cartProduct.quantity = 1;
            return [cartProduct, ...state];
        } else return state;

    case REMOVE_PRODUCT:
        return state.filter(product => product.id !== action.id);

    case CHANGE_QUANTITY:
        return state.map((product) => {
            if (product.id === action.id) {
                product.quantity = (action.quantity !== "") ? product.quantity : action.quantity;
                product.quantity = (action.quantity < 1) ? product.quantity : action.quantity;
            }
            return product;
        });

    case CLEAR_CART:
        return [];

    default:
      return state;
  }
};