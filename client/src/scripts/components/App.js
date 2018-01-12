import React, { Component } from "react";
import TextInput from "components/TextInput";
import Comments from "components/Comments";
import "App.css";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			error: false
		};
		this.fetchComments = this.fetchComments.bind(this);
	}

	fetchComments(submissionId) {
		fetch(`/comments/${submissionId}`)
			.then(
				response => {
					if (!response.ok) {
						this.handleError(response);
					}
					return response.json();
				},
				error => this.handleError(error)
			)
			.then(json => {
				if (json.success) {
					this.setState({ comments: json.data, error: false });
				} else {
					this.handleError(json.error.message);
				}
			});
	}

	handleError(error) {
		console.log(error);
		this.setState({ error: true });
	}

	render() {
		let results;
		if (this.state.error) {
			results = <div>No results found</div>;
		} else {
			results = <Comments comments={this.state.comments} />;
		}
		return (
			<div className="App">
				<TextInput
					placeholderText={"Type reddit submission Id..."}
					onSubmit={input => this.fetchComments(input)}
					submitButtonText={"submit"}
				/>
				{results}
			</div>
		);
	}
}
