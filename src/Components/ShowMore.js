import React from "react";
import OneOnOneForm from "./OneOnOneForm";

class ShowMore extends React.Component {
	constructor() {
		super();
		this.state = {
			showMore: true,
			codeWars: "",
		};
	}
	checkmark = (
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/White_check_mark_in_dark_green_rounded_square.svg/512px-White_check_mark_in_dark_green_rounded_square.svg.png"
			alt="check"
			className="icon"
		/>
	);
	xmark = (
		<img
			src="https://icon-library.com/images/close-button-icon/close-button-icon-12.jpg"
			alt="red x"
			className="icon"
		/>
	);
	/**
	 * Toggles Show More tab for each student
	 */
	extraInfo = () => {
		this.setState({ showMore: !this.state.showMore });
	};
	/**
	 * Sets the codewars percentage as well as the color for the number.
	 * @param {Number} current -numerator
	 * @param {Number} total -denominator
	 * @returns {Number} Number as a percentage
	 */
	getPercentage = (current, total) => {
		return ((current / total) * 100).toFixed(2);
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
						<p className={this.state.codeWars}>
							Percent of Goal Acheieved:{" "}
							{this.getPercentage(
								studentInfo.codewars.current.total,
								studentInfo.codewars.goal.total
							)}
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
						<p>
							Resume:{" "}
							{studentInfo.certifications.resume ? this.checkmark : this.xmark}
						</p>
						<p>
							LinkedIn:{" "}
							{studentInfo.certifications.linkedin ? this.checkmark : this.xmark}
						</p>
						<p>
							GitHub:{" "}
							{studentInfo.certifications.github ? this.checkmark : this.xmark}
						</p>
						<p>
							{" "}
							Mock Interview:{" "}
							{studentInfo.certifications.mockInterview ? this.checkmark : this.xmark}
						</p>
					</div>
					<OneOnOneForm studentInfo={studentInfo} key={studentInfo.id} />
				</div>
			</div>
		);
	}
}

export default ShowMore;
