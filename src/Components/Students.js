import React from "react";
import ShowDetailsButton from "./ShowDetailsButton";
import StudentStatus from "./StudentStatus";

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      studentStatus: '',
    }
  }

  /**
   * validateStudentStatus: validates the student certifications
   * @param {String} resume -A student date of birth.
   * @returns A human readable student date of bith (e.g) February 9, 1979
   */
   validateStudentStatus = (resume, linkedin, mockInterview, github, codewars) => {
    if(resume && linkedin && mockInterview && github && (codewars > 600)) {
      this.setState({ 
        studentStatus: 'On Track to Graduate',
      });
    }
  }

  /**
   * getFormatedDOB: generates a formated students date of birth
   * @param {String} dob -A student date of birth.
   * @returns A human readable student date of bith (e.g) February 9, 1979
   */
  getFormatedDOB = (dob) => {
    const date = new Date(dob);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
  
    return `${month} ${day}, ${year}`; 
  }

  render() {
    const studentList = (this.props.students).map(e => e)
    
    return(
      <>
        <ul>
        {(studentList).map(student => {
         return <li key={student.id}>
                  <section className="personal-data">
                    <img src={student.profilePhoto}/>
                    <div>
                      <div className="container">
                        <h4>{`${student.names['preferredName']} ${(student.names['middleName']).substring(0, 1)} ${student.names['surname']}`}</h4>
                        <span className="track-check">
                          {this.validateStudentStatus(student.certifications.resume,
                                          student.certifications.linkedin,
                                          student.certifications.mockInterview,
                                          student.certifications.github,
                                          student.codewars.current.total)}
                          
                        </span>
                      </div>
                      <p>Username: <span>{student.username}</span></p>
                      <p>Birthday: <span>{this.getFormatedDOB(student.dob)}</span></p>
                    </div>
                  </section> 
                  <ShowDetailsButton studentList={studentList} studentId={student.id}/>  
                </li>
        })}
        </ul>
      </>
    )
  }
}

export default Students;