import StudentList from './Components/StudentList';
import CohortList from './Components/CohortList';

import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedCohortCode: 'All Students',
		};
	}

	handleClick(item) {
		this.setState({ selectedCohortCode: item });
	}

	render() {
		const { data } = this.props;
		return (
			<div>
				<h1 className='student-dashboard'>Student Dashboard</h1>
				<h2 className='all-students'>All Students</h2>
				<p className='total'>Total:</p>
				<StudentList students={data} />
				<CohortList
					className='cohort'
					customClickHandler={(semester) => this.handleClick(semester)}
				/>
			</div>
		);
	}
}

export default App;
