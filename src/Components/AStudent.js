import React from 'react';
import './AStudent.css';

//import showMore from "";

function AStudent({ student: { names, username, profilePhoto, dob } }) {
  console.log(AStudent);
  /* const {
    profilePhoto,
    fullName,
    username,
    dob,
    codewars,
    certifications,
    cohort,
  } = student; */
  //const dateFormat = new Date(dob).toDateString().substring(4);

  //const { preferredName, middleName, surname } = fullName;

  return (
    <section className='studentcard'>
      <img
        className='profilepic'
        alt={names}
        src={profilePhoto}
        width={100}
        height={100}
      />
      <section className='bio'>
        <div className='fullname'>
          <strong>
            {names.preferredName} {names.middleName[0]} {names.surname}
          </strong>
        </div>
        <div className='expandedinfo'>
          <strong>
            {username}
            Birthday: {dob}
          </strong>
          <button>Show More</button>
        </div>
      </section>
    </section>
  );
}
export default AStudent;
