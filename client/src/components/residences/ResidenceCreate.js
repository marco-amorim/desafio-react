import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class ResidenceCreate extends Component {
	renderInput = ({ input, label, meta }) => {
		const errorClassName = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={errorClassName}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	onSubmit(formValues) {
		console.log(formValues);
	}

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form error"
			>
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field
					name="description"
					component={this.renderInput}
					label="Enter Description"
				/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		errors.title = 'You must enter a Title';
	}

	if (!formValues.description) {
		errors.description = 'You must enter a Description';
	}

	return errors;
};

export default reduxForm({
	form: 'ResidenceCreate',
	validate,
})(ResidenceCreate);
