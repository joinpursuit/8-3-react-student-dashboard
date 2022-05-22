import AllStudents from './Components/AllStudents';
import CohortBar from './Components/CohortBar';

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCohortCode: 'All Students',
    };
  }

  handleClick = (event) => {
    this.setState({ selectedCohortCode: event });
  };

  render() {
    const { data } = this.props;
    console.log('currentState', this.state.selectedCohortCode);
    return (
      <div>
        <h1 className='student-dashboard'>Student Dashboard</h1>

        <CohortBar
          className='cohort'
          data={data}
          handleClick={this.handleClick}
        />
        <AllStudents
          students={data}
          cohortCode={this.state.selectedCohortCode}
        />
      </div>
    );
  }
}
export default App;
