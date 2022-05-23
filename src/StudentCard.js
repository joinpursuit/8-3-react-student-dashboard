import { render } from "@testing-library/react";
import React, { useState } from "react";
import Students from "/Users/candace/Desktop/Pursuit Labs/React Dash Student Project /src/data/data.json";
import "./StudentCard.css";
import ShowMore from "./ShowMore"


export class StudentCard extends React.Component {
 constructor(){
   super();
   
  const onTrack = (student) => {Students.map((student) => {
  const  onTrackToGraduate = "";
	if (
		student.certifications.resume &&
		student.certifications.linkedin &&
		student.certifications.github &&
		student.certifications.mockInterview &&
		student.codewars.current.total > 600
	) {
	let	onTrackToGraduate = "On Track to Graduate";
	}
})
 }
 const showMore = false;
}
 
  render() {
  
    return (
      <section>
        {Students.map((student) => {
          const { Students } = this.props;
         const { names, profilePhoto, username,dob } = student ;
     

          return (
            <div id="student-card">
                <div >
               
                </div >
              <ul >
                {/* <p>{onTrack(student)}</p> */}
              <img id="profile-photo" src={profilePhoto} alt="profile" />
                <p id="student-name">{names.preferredName + ' '+ names.middleName[0] + '.' + ' ' + names.surname}</p>
                 <p>{username}</p>
                 <p>Birthday: {dob}</p>
                 <button
          className={ShowMore ? 'visited' : 'showmore'}
          onClick={() => this.clickShowMore()}
        >
          {ShowMore ? 'Show less...' : 'Show more...'}
        </button>
        {ShowMore ? <ShowMore student={student} /> : null}
                
                
              </ul>
            </div>
          );
        })}
      </section>
    );
  }
}

export default StudentCard;
