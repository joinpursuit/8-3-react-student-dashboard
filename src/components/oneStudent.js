import React from "react";
import ShowMore from "./showMore";

function oneStudent({ student }) {
  const { names, username, profilePhoto, dob } = student;
  return (
    <article>
      <h4>{names.preferredName}</h4>
      <p>{username}</p>
      <p>Birthday: {dob}</p>
      <img src={profilePhoto} alt={names.preferredName} />
      <ShowMore student={student} />
    </article>
  );
}
export default oneStudent;
