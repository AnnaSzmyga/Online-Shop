import data from '../data/data.json';
import { SELECT_CATEGORY } from './productsActions';

/* INITIAL STATE */
const initialState = data;

/* REDUCER */

export default function products(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
            return state.filter(product => product.category === action.category);
    default:
      return state;
  }
};