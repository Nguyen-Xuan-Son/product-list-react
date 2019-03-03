import { combineReducers } from 'redux';
import products from './products';
import product from './product';

const myReducers = combineReducers({
	products, product
});

export default myReducers;