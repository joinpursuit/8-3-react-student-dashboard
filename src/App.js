import React from 'react'
import './App.css'
import Data from './data/data'
import StudentList from './Components/StudentList'
import CorhortList from './Components/CorhortList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      studentData: [...Data],
      cohortli: 'All Students',
    }
  }

  clickCohort = (semester) => {
    let selectedCohortList = Data.filter(
      (students) =>
        students.cohort.cohortCode.replace(/\B(?=(\d{4})+(?!\d))/g, ' ') ===
        semester
    )

    this.setState({ studentData: [...selectedCohortList] })
    this.setState({ cohortli: semester })

    if (semester === null) {
      this.setState({ cohortli: 'All Students', studentData: [...Data] })
    }
  }

  render() {
    let { studentData, cohortli } = this.state

    return (
      <section className='whole-class'>
        <h1>Student Dashboard</h1>
        <div className='student-dash'>
          <CorhortList data={Data} clickCohort={this.clickCohort} />
          <StudentList data={studentData} cohortli={cohortli} />
        </div>
      </section>
    )
  }
}

export default App
