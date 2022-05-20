import React from "react";


class Students extends React.Component {
  constructor() {
    super();
  }

  // validateCohort = (this.props.filter) => {
  //   dd
  // }

  render() {
    // const studentList = new Set(
    //   (this.props.data).map(e => e.names)
    // )
    const studentList = (this.props.data).map(e => e)
    
    return(
      <>
      {console.log(studentList.length)}
        <ul>
        {(this.props.data).map(student => {
         return <li key={student.id}>
                  <section className="student-personal-data">
                  <img src={student.profilePhoto}/>
                  <div>
                    <h4>
                      {`${student.names['preferredName']} ${(student.names['middleName']).substring(0, 1)} ${student.names['surname']}`}
                    </h4>
                    <p>{student.username}</p>
                    <p>Birthday: {student.dob}</p>
                    <button>Show more...</button>
                  </div>
                  </section>
                  <section className="student-academic-data">
                    <div>
                      <h4>Codewars:</h4>
                      <ul>
                        <li><span>Current total:</span> {student.codewars.current.total}</li>
                        <li><span>Last week:</span> {student.codewars.current.lastWeek}</li>
                        <li><span>Goal:</span> {student.codewars.goal.total}</li>
                      </ul>
                    </div>
                    <div>
                      <h4>Scores:</h4>
                      <ul>
                        <li><span>Assignments:</span> {student.cohort.scores.assignments}</li>
                        <li><span>Projects:</span> {student.cohort.scores.projects}</li>
                        <li><span>Assessments:</span> {student.cohort.scores.assessments}</li>
                      </ul>  
                    </div>
                    <div>
                      <h4>Certifications:</h4>
                      <ul>
                        <li><span>Resume:</span> {student.certifications.resume}</li>
                        <li><span>Linkedin:</span> {student.certifications.linkedin}</li>
                        <li><span>Mock Interview:</span> {student.certifications.mockInterview}</li>
                        <li><span>Github:</span> {student.certifications.github}</li>
                      </ul>
                    </div>
                  </section>
                </li>
        })}
        </ul>
      </>
    )
  }
}

export default Students;