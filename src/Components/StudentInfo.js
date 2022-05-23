import React from 'react';
import ShowMore from './ShowMore';

function StudentInfo(props) {
  const names = props.student.names;
  const username = props.student.username;
  const profilePhoto = props.student.profilePhoto;
  const dob = props.student.dob;
  const formatBirthday = new Date(dob).toDateString().substring(4);

  /**
   * OnTrackToGraduate to check the graduation status of each student.
   * @param {Object} student - An object with detailed info of each student.
   * @returns {String} - A string stating the graduation status of each student.
   */

  const OnTrackToGraduate = (student) => {
    const { resume, linkedin, github, mockInterview } = student.certifications;
    const codewarsScore = student.codewars.current.total;
    if (resume && linkedin && github && mockInterview && codewarsScore > 600) {
      return 'EXCELLENT! ON TRACK TO GRADUATE!';
    } else return 'ALMOST THERE! KEEP IT UP!';
  };
  return (
    <div>
      <article className='student-info'>
        <img src={profilePhoto} alt={names} className='profile-photo' />
        <h4>
          {names.preferredName} {names.middleName[0]}. {names.surname}
        </h4>
        <p className='ontrack'>{OnTrackToGraduate(props.student)}</p>
        <p>
          <em>{username}</em>
        </p>
        <p>
          <em>Birthday: {formatBirthday}</em>
        </p>
        <ShowMore student={props.student} />
      </article>
    </div>
  );
}

export default StudentInfo;
