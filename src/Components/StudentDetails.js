import React from "react";

const StudentDetails = (props) => {
  console.log(props.studentList)
  const studentData = (props.studentList).filter(student => student.id === props.studentId)
  console.log(studentData)
  return(
    <>
      {studentData.map(e => { 
        return <section  >
          <div> 
            <h4>Codewars: </h4>
            <ul>
              <li><span>Current total:</span> {e.codewars.current.total}</li>
              <li><span>Last week:</span> {e.codewars.current.lastWeek}</li>
              <li><span>Goal:</span> {e.codewars.goal.total}</li>
            </ul>
          </div>
          <div>
            <h4>Scores:</h4>
            <ul>
              <li><span>Assignments:</span> {e.cohort.scores.assignments}</li>
              <li><span>Projects:</span> {e.cohort.scores.projects}</li>
              <li><span>Assessments:</span> {e.cohort.scores.assessments}</li>
            </ul>  
          </div>
          <div>
            <h4>Certifications:</h4>
            <ul>
              <li><span>Resume:</span> {e.certifications.resume}</li>
              <li><span>Linkedin:</span> {e.certifications.linkedin}</li>
              <li><span>Mock Interview:</span> {e.certifications.mockInterview}</li>
              <li><span>Github:</span> {e.certifications.github}</li>
            </ul>
          </div>
        </section>
      })}

        
    </>
  )

}

export default StudentDetails;