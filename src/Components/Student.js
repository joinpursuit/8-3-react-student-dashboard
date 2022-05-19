import React from "react";

export default function Student({ semester }) {
  const studentPreferredName = semester.names.preferredName;
  const studentMiddleName = semester.names.middleName;
  const studentSurName = semester.names.surname;
  const profilePicture = semester.profilePhoto;
  const emailAddress = semester.username;
  const studentBirthday = semester.dob;

  return (
    <div className="studentBio">
      <img src={profilePicture} className="profilePic"></img>
      <div className="studentInformation1">
        <p>
          <strong>
            {studentPreferredName +
              " " +
              studentMiddleName +
              " " +
              studentSurName}
          </strong>
        </p>
        <p>{emailAddress}</p>
        <p>Birthday: {studentBirthday}</p>
        <button id="showMore">Show More...</button>
      </div>
    </div>
  );
}
