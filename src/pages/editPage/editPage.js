import React, { Component } from 'react';
import FormEdit from './../../components/formEdit/formEdit';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class EditPage extends Component {

    render() {
    	const { onCreatePropduct, onUpdateProductRequest, onGetProductRequest, product } = this.props;

        return (
            <div className="container mt-3">
            	<FormEdit 	match={this.props.match}
            				onCreatePropduct={onCreatePropduct}
            				onUpdateProductRequest={onUpdateProductRequest}
            				onGetProductRequest={onGetProductRequest}
            				product={product}
            				history={this.props.history}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
	return ({
		product: state.product
	})
}

const mapDispatchToProps = (dispatch, props) => {
	return ({
		onCreatePropduct: product => {
			dispatch(actions.createProductRequest(product));
		},
		onUpdateProductRequest: product => {
			dispatch(actions.updateProductRequest(product));
		},
		onGetProductRequest: id => {
			dispatch(actions.getProductRequest(id));
		}
	});
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
