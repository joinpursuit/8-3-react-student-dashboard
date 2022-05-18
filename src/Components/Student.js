function Student({ student }) {
  const { profilePhoto, names, username, dob } = student;
  const { preferredName, middleName, surname } = names;

  return (
    <article className="student-card">
      <img src={profilePhoto} alt={preferredName} />
      <aside className="student-info">
        <h4>
          {preferredName} {middleName[0]}. {surname}
        </h4>
        <p>{username}</p>
        <p>Birthday: {dob}</p>
      </aside>
    </article>
  );
}

export default Student;
