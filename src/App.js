import StudentList from './Components/StudentList';
import CohortList from './Components/CohortList';

import React from 'react';

class App extends React.Component {
	constructor() {
	super();
	this.state = {
		cohortList: '',
	};
	}

	render() {
		const {data} = this.props
		return (
			<div>
				<h1>Student Dashboard</h1>

				<StudentList students={data}/>
				<CohortList />
			</div>
		);
	}
}

export default App;
