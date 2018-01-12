import React, { Component } from "react";

class TextInput extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value.trim() });
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.value.trim() !== "") {
			this.props.onSubmit(this.state.value);
		}
	}

	render() {
		return (
			<div className="TextInput">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder={this.props.placeholderText}
						onChange={this.handleChange}
						value={this.state.value}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
export default TextInput;
