import StudentCard from "./StudentCard";

function StudentList(props) {
  return (
    <section className="student-list-container">
      <h2>All Students</h2>
      <p>Total Students: {props.data}</p>
      <div className="student-list">
        <StudentCard />
      </div>
    </section>
  );
}

export default StudentList;
