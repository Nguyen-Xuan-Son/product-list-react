import React, { Component } from 'react';
import Products from './../../components/products/products';
import ProductItem from './../../components/productItem/productItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../actions/index';

class ProductsPage extends Component {

    componentDidMount() {
        this.props.onGetProductsFetch();
    }

    render() {
        const { products } = this.props;

        return (
            <div>
	            <div className="container mt-3">
					<div className="row">
						<div className="col-md-12 col-sm-12">
							<h3 className="text-center">Product list</h3>
							<Link to="/product/create">
                                <button type="button" className="btn btn-info mb-3">+ Add product</button>                     
                            </Link>
						</div>
					</div>
				</div>
            	<Products>
            		{this.showProductItem(products)}
            	</Products>
            </div>
        );
    }

    onDeleteItem = (id) => {
        this.props.onDeleteProductRequest(id);
    }

    showProductItem = (products) => {
        let result = null;

        if (products && products.length) {
            result = products.map((product, index) => {
                return <ProductItem onDeleteItem={this.onDeleteItem} product={product} key={index} index={index}/>
            });
        }

    	return result;
    }

}

const mapStateToProps = state => {
    return ({
        products: state.products
    }) 
}

const mapDispatchToProps = (dispatch, props) => {
    return ({
        onGetProductsFetch: () => {
            dispatch(actions.getProductsFetch());
        },
        onDeleteProductRequest: (id) => {
            dispatch(actions.deleteProductRequest());
        } 
    }) 
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
