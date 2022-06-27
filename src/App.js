import Semester from './Components/Semester'
import './App.css'
import StudentCards from './Components/StudentCards'
import cohortData from './data/data.json'
import React from 'react'
import TotalStudents from './Components/TotalStudents'
//create a loop *here* for looping through the amount of cohorts? or in index? How can I pass these down as props if make them props? 


//
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      students: [...cohortData],
      semester: 'All Students'
    }
  }

handleSemesterClick = (semester) => {
if (semester === 'All Students') {
  this.setState({students: cohortData, semester: 'All Students'})
 } else {
   let cohortCode = semester.replace(' ', '')
   let studentsInSemester = cohortData.filter((student)=> {
     return student.cohort.cohortCode === cohortCode
   })
    this.setState({students: studentsInSemester, semester: semester}) 
  }
}




  render() {
    const { students } = this.state //destructuring; returns now just an array of each student
  return (
    <section>
      <h1>Student Dashboard</h1>
    <div className="studentlist">
      <Semester handleSemesterClick={this.handleSemesterClick}/>
      <TotalStudents students={students} handleSemesterClick={this.handleSemesterClick} semester={this.state.semester}/>
      <StudentCards students={students}/>
    </div>
    </section>
  );
  }
}

export default App;

