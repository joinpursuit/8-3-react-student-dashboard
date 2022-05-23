import React from 'react';

class ShowMore extends React.Component {
	constructor() {
		super();
		this.state = {
			showMore: false,
		};
	}
	render() {
		const { student } = this.props;
		const studentCode = student.codewars.current.total;
		const studentCode2 = student.codewars.current.lastWeek;
		const studentCode3 = student.codewars.goal.total;
		const studentCode4 = student.codewars.goal.lastWeek;

		const showMoreButton = () => {
			this.setState({
				showMore: !this.state.showMore,
			});
		};

		const toggleState = this.state.showMore;

		return (
			<div>
				<button onClick={showMoreButton}>
					{toggleState ? 'Showless' : 'ShowMore'}
				</button>
				{toggleState && (
					<div>
						<p>Current Total:{studentCode}</p>
						<p>Current LastWeek:{studentCode2}</p>
						<p>Goal Total:{studentCode3}</p>
						<p>Goal LastWeek:{studentCode4}</p>
						<p>Assignments:{student.cohort.scores.assignments}</p>
						<p>Projects:{student.cohort.scores.projects}</p>
						<p>Assessments:{student.cohort.scores.assessments}</p>
						<p>Resume:{student.certifications.resume}</p>
						<p>Linkedin:{student.certifications.linkedin}</p>
						<p>Github:{student.certifications.github}</p>
						<p>Mock Interview:{student.certifications.mockInterview}</p>

						<p>{student.scores}</p>
					</div>
				)}
			</div>
		);
	}
}
export default ShowMore;
