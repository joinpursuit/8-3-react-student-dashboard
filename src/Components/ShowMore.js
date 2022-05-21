import React from "react";

class ShowMore extends React.Component {
	constructor() {
		super();
		this.state = {
			showMore: true,
		};
		//this.studentInfo = this.props;
	}
	// { studentInfo } = this.props;
	extraInfo = () => {
		this.setState({ showMore: !this.state.showMore });
	};
	render() {
		return (
			<div className="show-more" id={this.props.id}>
				<button onClick={this.extraInfo}>
					{this.state.showMore ? "Show More" : "Show Less"}
				</button>
				<div className={this.state.showMore ? "hidden" : null}>
					<div>Codewars</div>
					<div>Scores</div>
					<div>Certifications</div>
				</div>
			</div>
		);
	}
}

export default ShowMore;
