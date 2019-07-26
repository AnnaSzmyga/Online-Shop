import { createStore, combineReducers } from 'redux';

// import reducers
import products from './productsReducer';
import cart from './cartReducer';

// combine reducers
const rootReducer = combineReducers({
    products,
    cart
});

// create store
const store = createStore(rootReducer);

export default store;