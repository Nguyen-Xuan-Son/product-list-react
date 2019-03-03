import React, { Component } from 'react';

class Products extends Component {

    render() {

    	const { children } = this.props;

        return (
            <div className="container mt-3">
				<div className="row">
					<div className="col-md-12 col-sm-12">
						<table className="table table-hover">
						  	<thead className="thead-dark">
						  	  	<tr>
						  	  	  	<th scope="col">Stt</th>
						  	  	  	<th scope="col">Code</th>
						  	  	  	<th scope="col">Name</th>
						  	  	  	<th scope="col">Price</th>
						  	  	  	<th scope="col" className="text-center">Status</th>
						  	  	  	<th scope="col" className="text-center">Actions</th>
						  	  	</tr>
						  	</thead>
							  	<tbody>
							  	  	{children}
							  	</tbody>
						</table>
					</div>
				</div>
			</div>
        );
    }
}

export default Products;
