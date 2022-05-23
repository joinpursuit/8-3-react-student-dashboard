import React from 'react';

class ShowMore extends React.Component {
	constructor() {
		super();
		this.state = {
			showMore: false,
		};
		// still need to do one on one but most is done
	}

	render() {
		const { student } = this.props;
		const studentCode = student.codewars.current.total;
		const studentCode2 = student.codewars.current.lastWeek;
		const studentCode3 = student.codewars.goal.total;
		const studentCode4 = student.codewars.goal.lastWeek;

		// to display percentage later on
		const percentage = ((studentCode2 / studentCode3) * 100).toFixed(0);

		const showMoreButton = () => {
			this.setState({
				showMore: !this.state.showMore,
			});
		};

		// getting colors for codewar scores
		const codewarsColors = (percentage) => {
			return percentage >= 100
				? 'green'
				: percentage > 50 && percentage < 100
				? '#DAA520'
				: 'red';
		};

		const toggle = this.state.showMore;

		return (
			<div>
				<button onClick={showMoreButton}>
					{toggle ? 'Showless' : 'ShowMore'}
				</button>
				{toggle && (
					<div>
						<h4 className='codewars'>Codewars</h4>
						<p>Current Total: {studentCode}</p>
						<p>Current LastWeek: {studentCode2}</p>
						<p>Goal Total: {studentCode3}</p>
						<p>Goal LastWeek: {studentCode4}</p>
						<p>
							Percent of Goal Achieved:
							<span style={{ color: codewarsColors(percentage) }}>
								{' '}
								{percentage}
							</span>
							%
						</p>
						<br></br>
						<h4 className='scores'>Scores</h4>
						<p className='scores'>
							Assignments: {student.cohort.scores.assignments * 100}%
						</p>
						<p className='scores'>
							Projects: {student.cohort.scores.projects * 100}%
						</p>
						<p className='scores'>
							Assessments: {student.cohort.scores.assessments * 100}%
						</p>
						<br></br>
						<h4 className='certifications'>Certifications</h4>
						<p className='certifications'>
							Resume: {student.certifications.resume ? '✅' : '❌'}
						</p>
						<p className='certifications'>
							Linkedin: {student.certifications.linkedin ? '✅' : '❌'}
						</p>
						<p className='certifications'>
							Github: {student.certifications.github ? '✅' : '❌'}
						</p>
						<p>
							Mock Interview:{' '}
							{student.certifications.mockInterview ? '✅' : '❌'}
						</p>

						<p>{student.scores}</p>
					</div>
				)}
			</div>
		);
	}
}
export default ShowMore;
