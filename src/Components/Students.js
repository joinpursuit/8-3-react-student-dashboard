import React from "react";
import ShowDetailsButton from "./ShowDetailsButton";

let iconGraduate = <i class="fa fa-graduation-cap"></i>;
const message = 'On Track to Graduate';

/**
 * validateStudentStatus: validates the student certifications
 * @param {Boolean} resume -A resume certification.
 * @param {Boolean} linkedin -A linkedin certification.
 * @param {Boolean} mockInterview -A mockInterview certification.
 * @param {Boolean} github -A github certification.
 * @param {Number} codewars -A Codewars global score.
 * @returns A string that represents the student status 
 */
const validateStudentStatus = (resume, linkedin, mockInterview, github, codewars) => {
  return (resume && linkedin && mockInterview && github && (codewars > 600)) ? 
            <span className="track-check">{message}  {iconGraduate}</span> : '';
}

/**
 * getFormatedDOB: generates a formated students date of birth
 * @param {String} dob -A student date of birth.
 * @returns A human readable student date of bith (e.g) February 9, 1979
 */
const getFormatedDOB = (dob) => {
  const date  = new Date(dob),
        month = date.toLocaleString('default', { month: 'long' }),
        day   = date.getDate(),
        year  = date.getFullYear();
        
    return `${month} ${day}, ${year}`; 
  }

function Students(props) {
  const { students } = props;
  
  return(
    <>
      <ul>
      {(students).map(student => {
        return <li key={student.id} className='student-card'>
                <section className="personal-data">
                  <img src={student.profilePhoto}/>
                  <div>
                    <div className="container">
                      <h4>{`${student.names['preferredName']} ${(student.names['middleName']).substring(0, 1)} ${student.names['surname']}`}</h4>
                      {validateStudentStatus( 
                        student.certifications.resume,
                        student.certifications.linkedin,
                        student.certifications.mockInterview,
                        student.certifications.github,
                        student.codewars.current.total)
                      }
                    </div>
                    <p>Username: <span>{student.username}</span></p>
                    <p>Birthday: <span>{getFormatedDOB(student.dob)}</span></p>
                  </div>
                </section> 
                <ShowDetailsButton studentList={students} studentId={student.id}/>  
              </li>
      })}
      </ul>
    </>
  )
}

export default Students;