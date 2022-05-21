import React from "react";

class ShowMore extends React.Component {
	constructor() {
		super();
		this.state = {
			showMore: true,
		};
		// this.studentInfo = studentInfo;
	}
	// { studentInfo } = studentInfo;
	extraInfo = () => {
		this.setState({ showMore: !this.state.showMore });
	};
	render() {
		const { studentInfo } = this.props;
		return (
			<div className="show-more" id={studentInfo.id}>
				<button onClick={this.extraInfo}>
					{this.state.showMore ? "Show More" : "Show Less"}
				</button>
				<div className={this.state.showMore ? "hidden" : null} id="showMoreSection">
					<div className="codewars">
						<h4>Codewars</h4>
						<p>Current Total: {studentInfo.codewars.current.total}</p>
						<p>Last Week: {studentInfo.codewars.current.lastWeek}</p>
						<p>Goal: {studentInfo.codewars.goal.total}</p>
						<p>
							Percent of Goal Acheieved:{" "}
							{(
								(studentInfo.codewars.current.total /
									studentInfo.codewars.goal.total) *
								100
							).toFixed(2)}
							%
						</p>
					</div>
					<div className="scores">
						<h4>Scores</h4>
						<p> Assignments: {studentInfo.cohort.scores.assignments * 100}%</p>
						<p>Projects: {studentInfo.cohort.scores.projects * 100}%</p>
						<p>Assessments: {studentInfo.cohort.scores.assessments * 100}%</p>
					</div>
					<div className="certifications">
						<h4>Certifications</h4>
						<p>Resume: {studentInfo.certifications.resume ? "YEZZUR" : "nah brotha"}</p>
						<p>
							LinkedIn:{" "}
							{studentInfo.certifications.linkedin ? "YEZZUR" : "nah brotha"}
						</p>
						<p>GitHub: {studentInfo.certifications.github ? "YEZZUR" : "nah brotha"}</p>
						<p>
							{" "}
							Mock Interview:{" "}
							{studentInfo.certifications.mockInterview ? "YEZZUR" : "nah brotha"}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ShowMore;
