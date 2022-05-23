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

	handleClick = (item) => {
		this.setState({ selectedCohortCode: item });
	};

	render() {
		const { data } = this.props;
		console.log('currentState', this.state.selectedCohortCode);
		return (
			<section>
				<h1>
					<em>Student Dashboard</em>
				</h1>

				<div className='student-app'>
					<CohortList data={data} handleClick={this.handleClick} />
					<article>
						<StudentList
							students={data}
							cohortCode={this.state.selectedCohortCode}
						/>
					</article>
				</div>
			</section>
		);
	}
}

export default App;
