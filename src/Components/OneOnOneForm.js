import React from "react";

export default class OneOnOneForm extends React.Component {
	constructor() {
		super();
		this.state = {
			commenter: "",
			comment: "",
		};
	}
	handleCommenter = (event) => {
		const { value } = event.target;
		this.setState({ commenter: value });
	};
	handleComment = (event) => {
		const { value } = event.target;
		this.setState({ comment: value });
	};
	/**
	 * Adds 1on1 submission to the list of reviews
	 * @param {*} event
	 */
	addToSubmissions = (event) => {
		event.preventDefault();
		let submission = document.createElement("p");
		submission.textContent = `${this.state.commenter} says: ${this.state.comment}`;
		document.querySelector("div.submissions").append(submission);
		this.setState({ comment: "", commenter: "" });
	};
	render() {
		const { studentInfo } = this.props;
		const { comment, commenter } = this.state;
		return (
			<div className="one-form">
				{" "}
				1-on-1 Notes
				<form onSubmit={this.addToSubmissions}>
					<label>
						{" "}
						Commenter Name{" "}
						<input
							type="text"
							name="name"
							value={commenter}
							onChange={this.handleCommenter}
						/>
					</label>
					<br />
					<label>
						{" "}
						Comment{" "}
						<input
							type="text"
							name="comment"
							value={comment}
							onChange={this.handleComment}
						/>
					</label>
					<br />
					<input type="submit" value="Add Note" />
				</form>
				<div className="submissions">
					{studentInfo.notes.length
						? studentInfo.notes.map((note) => {
								return `${note.commenter} says: ${note.comment}`;
						  })
						: ""}
				</div>
			</div>
		);
	}
}
