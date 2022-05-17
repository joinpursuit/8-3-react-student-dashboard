import StudentList from './Components/StudentList'
import CohortList from './Components/CohortList'
import React from 'react';

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      cohortData: []
    }
  }
  render () {
  return (
    <div>
      <h1>Student Dashboard</h1>
      
      <StudentList />
      <CohortList />
    </div> 
  
  )
}
}
export default App;
