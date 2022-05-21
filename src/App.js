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

	handleClick = (item) =>{
		this.setState({ selectedCohortCode: item });
	}

	render() {
		const { data } = this.props;
    console.log('currentState',this.state.selectedCohortCode)
		return (
			<div>
				<h1 className='student-dashboard'>Student Dashboard</h1>
				
				<CohortList
					className='cohort'
					data={data}
					handleClick={this.handleClick}
				/>
        <StudentList students={data} cohortCode={this.state.selectedCohortCode} />
			</div>
		);
	}
}

export default App;
