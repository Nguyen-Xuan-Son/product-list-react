import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

	onDelete = (id) => {
		this.props.onDeleteItem(id);
	}

    render() {

    	const { product, index } = this.props;

        return (
            <tr>
	  	  	  	<td>{index + 1}</td>
	  	  	  	<td>{product.code}</td>
	  	  	  	<td>{product.name}</td>
	  	  	  	<td>{product.price}</td>
	  	  	  	<td className="text-center">
	  	  	  		<span className={`badge badge-${product.status ? 'success': 'danger'}`}>{product.status ? 'Stocking': 'Out of stock'}</span>
	  	  	  	</td>
	  	  	  	<td className="text-center">
	  	  	  		<Link className="btn btn-warning" to={`/products/${product.id}/edit`}>Edit</Link>
	  	  	  		<button className="btn btn-danger ml-1" onClick={() => this.onDelete(product.id)}>Delete</button>
	  	  	  	</td>
	  	  	</tr>
        );
    }

}

export default ProductItem;
