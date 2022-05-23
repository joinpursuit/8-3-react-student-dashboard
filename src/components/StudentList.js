import StudentCard from "./StudentCard";

const StudentList = ({ data, title }) => (
  <div className="all-students">
    <h3>{title}</h3>
    <p className="total">
      Total Students: <span>{data.length}</span>
    </p>
    {data.map((student) => (
      <StudentCard data={student} />
    ))}
  </div>
);

export default StudentList;
