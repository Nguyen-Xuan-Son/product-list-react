import React, { Component } from 'react';

class FormEdit extends Component {

	constructor(props) {

		super(props);

		this.state = {
			id: '',
			name: '',
			price: '',
			status: '',
			code: ''
		};
	}


	onHandleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({
			[name]: value
		});
	}

	onSubmit = (e) => {
		let { name, price, status, code, id } = this.state;
		e.preventDefault();

		if (this.state.id) {
			this.props.onUpdateProductRequest({ id, name, price, status, code });
			this.onGoBack();
			// TODO
		} else {
			this.props.onCreatePropduct({ name, price, status, code });
			this.onGoBack();
			// TODO
		}
	}

	onGoBack = () => {
		let { history } = this.props;
		history.goBack();
	}

	componentWillReceiveProps(nextProps) {
		let { product } = nextProps;
		this.setState(product);
	}

	componentDidMount() {
		const { match } = this.props;
		if (match && match.params) {
			this.props.onGetProductRequest(match.params.id);
		}
	}

    render() {
    	const { name, price, status, code } = this.state;

        return (
            <div>
            	<form onSubmit={this.onSubmit}>
				  	<div className="form-group">
				  	  	<label htmlFor="field-name" className="font-weight-bold">Name</label>
				  	  	<input 	type="text"
				  	  			className="form-control"
				  	  			id="field-name"
				  	  			name="name"
				  	  			value={name}
				  	  			onChange={this.onHandleChange}
				  	  			placeholder="Enter name" />
				  	</div>
				  	<div className="form-group">
				  	  	<label htmlFor="field-code" className="font-weight-bold">Code</label>
				  	  	<input 	type="text"
				  	  			className="form-control"
				  	  			id="field-code"
				  	  			name="code"
				  	  			value={code}
				  	  			onChange={this.onHandleChange}
				  	  			placeholder="Enter code" />
				  	</div>
				  	<div className="form-group">
				  	  	<label htmlFor="field-price" className="font-weight-bold">Price</label>
				  	  	<input 	type="number"
				  	  			className="form-control"
				  	  			id="field-price"
				  	  			name="price"
				  	  			value={price}
				  	  			onChange={this.onHandleChange}
				  	  			placeholder="Enter price" />
				  	</div>
				  	<div className="form-group form-check">
				  	  	<input 	type="checkbox"
				  	  			className="form-check-input"
				  	  			value={status}
				  	  			name="status"
				  	  			onChange={this.onHandleChange}
				  	  			id="field-stocking" />
				  	  	<label 	className="form-check-label"
				  	  			htmlFor="field-stocking">Stocking</label>
				  	</div>
				  	<button type="button" className="btn btn-danger" onClick={() => this.onGoBack()}>Back</button>
				  	<button type="submit" className="btn btn-primary ml-2">{this.state.id ? 'Edit' : 'Create'}</button>
				</form>
            </div>
        );
    }
}

export default FormEdit;
