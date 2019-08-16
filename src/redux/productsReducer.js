import products from '../data/data.json';
import { SORT_ASCEND, SORT_DESCEND, SORT_AZ, SORT_ZA, FILTER_CATEGORY, RESET_FILTERING } from './productsActions';

/* INITIAL STATE */

const initialState = products;

/* REDUCER */

export default function productsReducer(state = initialState, action) {
  switch (action.type) {

    case SORT_ASCEND:
      console.log("sortowanie rosnąco");

      return state.sort((a, b) => {
        return a.price - b.price;
      });

    case SORT_DESCEND:
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

    case FILTER_CATEGORY:
      return initialState.filter(product => product.category === action.category);

    case RESET_FILTERING:
      return initialState;

    default:
      return state;
  }
};