import data from '../data/data.json';
import { SELECT_CATEGORY, SORT_ASC, SORT_DESC, SORT_AZ, SORT_ZA } from './productsActions';

/* INITIAL STATE */
const initialState = data;

/* REDUCER */

export default function products(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return state.filter(product => product.category === action.category);

    case SORT_ASC:
      console.log("sortowanie rosnąco");

      return state.sort((a, b) => {
        return a.price - b.price;
      });

    case SORT_DESC:
      console.log("sortowanie malejąco");

      return state.sort((a, b) => {
        return b.price - a.price;
      });

    case SORT_AZ:
      console.log("Nazwa A-Z");

      return state.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

    case SORT_ZA:
      console.log("Nazwa Z-A");

      return state.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });

    default:
      return state;
  }
};