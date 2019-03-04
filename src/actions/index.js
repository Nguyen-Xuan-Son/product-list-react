import * as TypesAction from './../constants/index';
import callApi from './../helpers/index';

export const getProductsFetch = () => {
	return (dispatch) => {
		return callApi('products', 'GET', null).then(res => {
			if (res.status === 200) {
            	dispatch(getProducts(res.data));
			}
        });
	}
}

export const getProducts = (products) => {
	return ({
		type: TypesAction.GET_PRODUCTS,
		products
	});
}

export const deleteProductRequest = (id) => {
	return (dispatch) => {
		return callApi(`products/${id}`, 'DELETE', null).then(res => {
        	dispatch(deleteProduct(id));
        });
	}
}

export const deleteProduct = (id) => {
	return ({
		type: TypesAction.DELETE_PRODUCT,
		id
	});
}

export const createProductRequest = (product) => {
	return (dispatch) => {
		return callApi('products', 'POST', product).then((res) => {
			if (res.status === 200) {
            	dispatch(createProduct(res.data));
			}
		});
	}
}

export const createProduct = (product) => {
	return ({
		type: TypesAction.POST_PRODUCT,
		product
	});
}

export const updateProductRequest = (product) => {
	return (dispatch) => {
		return callApi(`products/${product.id}`, 'PUT', product).then((res) => {
			if (res.status === 200) {
            	dispatch(updateProduct(res.data));
			}
		});
	}
}

export const updateProduct = (product) => {
	return ({
		type: TypesAction.UPDATE_PRODUCT,
		product
	});
}

export const getProductRequest = (id) => {
	return (dispatch) => {
		return callApi(`products/${id}`, 'GET', null).then((res) => {
			if (res.status === 200) {
            	dispatch(getProduct(res.data));
			}
		});
	}
}

export const getProduct = (product) => {
	return ({
		type: TypesAction.GET_PRODUCT_BY_ID,
		product
	});
}
