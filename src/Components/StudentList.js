import StudentCard from "./StudentCard";
import "./StudentList.css";

function StudentList(props) {
  return (
    <section className="student-list-container">
      <h2>All Students</h2>
      <p>Total Students: {props.dataLength}</p>
      <div className="student-list">
        {props.data.map((element) => {
          return (
            <StudentCard
              key={element.id}
              pic={element.profilePhoto}
              name={
                element.names.preferredName +
                " " +
                element.names.middleName +
                " " +
                element.names.surname
              }
              email={element.username}
              birthday={element.dob}
            />
          );
        })}
      </div>
    </section>
  );
}

export default StudentList;
