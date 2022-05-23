import React from "react";

function oneStudent({ student }) {
  const { names, username, profilePhoto, dob } = student;
  return (
    <article>
      <h4>{names.preferredName}</h4>
      <p>{username}</p>
      <p>Birthday: {dob}</p>
      <img src={profilePhoto} alt={names.preferredName} />
      <a href="url">Show More...</a>
    </article>
  );
}
export default oneStudent;
