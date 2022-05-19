function StudentList(props) {
  return (
    <section className="student-list-container">
      <h2>All Students</h2>
      <p>Total Students: {props.data}</p>
      <ul className="student-list">
        <li>Student 1</li>
        <li>Student 2</li>
      </ul>
    </section>
  );
}

export default StudentList;
