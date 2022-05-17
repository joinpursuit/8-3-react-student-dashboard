import { Component } from 'react';
import StudentDashboard from './Components/StudentDashboard'
import SortByClass from './Components/SortByClass'
import './index.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      cohort: '',
    };
  }

  render() {
    const { allStudents } = this.props;

    console.log(allStudents[0]);

    return (
      <div className='App'>
        <div className='app-grid'>
        <h1>Student Dashboard</h1>
        <SortByClass/>
        <StudentDashboard/>
        </div>
      </div>
    );
  }
}

export default App;
