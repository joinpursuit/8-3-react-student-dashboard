import React from "react";

export class OneonOne extends React.Component {
	constructor() {
		super();
		this.state = {
			commenters: "",
			comments: "",
		};
	}
  

	handleCommenters = (event) => {
		const { value } = event.target;
		this.setState({ commenters: value });
	};
   

	handleComments = (event) => {
		const { value } = event.target;
		this.setState({ comments: value });
	};
	

	addToSubmissions = (event) => {
		event.preventDefault();
		let submission = document.createElement("p");
		submission.textContent = `${this.state.commenters} says: ${this.state.comments}`;
		document.querySelector("div.submissions").append(submission);
		this.setState({ comments: "", commenters: "" });
	};
	render() {
		const { Students } = this.props;
		const { comments, commenters} = this.state;
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
							value={commenters}
							onChange={this.handleCommenters}
						/>
					</label>
					<br />
					<label>
						{" "}
						Comment{" "}
						<input
							type="text"
							name="comment"
							value={comments}
							onChange={this.handleComments}
						/>
					</label>
					<br />
					<input type="submit" value="Add Note" />
				</form>
				{/* <div className="submissions">
					{student.notes.length
						? students.notes.map((note) => {
								return `${note.commenters} says: ${note.comments}`;
						  })
						: ""}
				</div> */}
			</div>
		);
                        }
                    }
        export default OneonOne;