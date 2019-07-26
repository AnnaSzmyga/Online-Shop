import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from './cartActions';

/* INITIAL STATE */

const initialState = [];

/* REDUCER */

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
        console.log("dodawanie do koszyka");
        return [action.product, ...state];

    case REMOVE_PRODUCT:
        console.log("usuwanie z koszyka");
        return state.filter(product => product.id !== action.id);

    case CLEAR_CART:
        console.log("usuwanie wszystkiego z koszyka");
        return [];

    default:
      return state;
  }
};