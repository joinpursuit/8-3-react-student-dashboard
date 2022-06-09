import React from "react";
import ShowMore from "./showMore";

function graduate(student) {
  const { certifications } = student;
  if (
    certifications.resume &&
    certifications.linkedin &&
    certifications.github &&
    certifications.mockInterview
  ) {
    return <p>On track to graduate.</p>;
  }
}

function oneStudent({ student }) {
  const { names, username, profilePhoto, dob } = student;
  return (
    <article>
      <h4>{names.preferredName}</h4>
      <p>{username}</p>
      <p>Birthday: {dob}</p>
      <img src={profilePhoto} alt={names.preferredName} />
      {graduate(student)}
      <ShowMore student={student} />
    </article>
  );
}
export default oneStudent;
