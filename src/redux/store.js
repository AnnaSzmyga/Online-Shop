import { createStore, combineReducers } from 'redux';

// import reducers
import products from './productsReducer';

// combine reducers
const rootReducer = combineReducers({
    products,
});

// create store
const store = createStore(rootReducer);

export default store;