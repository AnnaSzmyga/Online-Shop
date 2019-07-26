import { ADD_PRODUCT } from './cartActions';

/* INITIAL STATE */

const initialState = [];

/* REDUCER */

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
        console.log("dodawanie do koszyka");
        return [action.product, ...state];

    default:
      return state;
  }
};