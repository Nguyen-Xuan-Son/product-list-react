import * as ActionsType from './../constants/index';

const initialState = {};

const myReducer = (state = initialState, action) => {

	switch(action.type) {

		case ActionsType.GET_PRODUCT_BY_ID:
			state = action.product;
			return action.product;

		default:
			return state;

	}

}

export default myReducer;