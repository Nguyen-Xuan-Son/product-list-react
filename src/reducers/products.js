import * as ActionsType from './../constants/index';

const initialState = [];

const findIndex = (products, id) => {
    let result = -1;

    products.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    });

    return result;
}

const myReducer = (state = initialState, action) => {

	switch(action.type) {

		case ActionsType.GET_PRODUCTS:
			state = action.products;
			return [...state];

		case ActionsType.DELETE_PRODUCT:
			let index = findIndex(state, action.id);
			state.splice(index, 1);
			return [...state];

		case ActionsType.POST_PRODUCT:
			state.push(action.product);
			return [...state];

		case ActionsType.UPDATE_PRODUCT:
			let i = findIndex(state, action.product.id);
			state[i] = action.product;
			return [...state];

		default:
			return [...state];

	}

}

export default myReducer;