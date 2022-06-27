import React from "react";
import cohortData from '../data/data.json'



class Semester extends React.Component {
render() {
    const cohortCodes = cohortData.map((student) => student.cohort.cohortCode)
    const deduped = new Set(cohortCodes)
    const allSemesters = [...deduped]
    const { handleSemesterClick } = this.props
   
    return (
      <div>
        <h3>Choose a Class by Start Date</h3>
        <ul>
            <li>
                <div key="All-Students" onClick={() => handleSemesterClick('All Students')}>
                    All Students
                </div>
            </li>
          <li>{allSemesters.map((semester) => {
               const year = semester.substring(semester.length - 4)
               const season = semester.substring(0, semester.length - 4)
               const cohortSemester = `${season} ${year}`
             return (
                 <div key={semester} onClick={() => handleSemesterClick(cohortSemester)}>{cohortSemester}</div>
            
             )
          })}</li>
        </ul>
      </div>
    );
  }
}

export default Semester

