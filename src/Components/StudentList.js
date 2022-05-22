import Student from "./Student";
import { parseCohortCode } from "./Cohort.js";
import "./StudentList.css";

/**
 * Filter the given student array based on the given cohortCode
 * @param {[]Object} data - An array of student objects, each object contains info of the student
 * @param {String} selectedCohort - cohortCode of selected cohort
 * @returns an array of student object match with the selected cohort code
 */
const selectedCohortStudent = (data, selectedCohort) => {
  if (selectedCohort === "AllStudents") {
    return data;
  } else {
    return data.filter((student) => {
      return student.cohort.cohortCode === selectedCohort;
    });
  }
};

/* Render the student list with student cards
 * Each student card contains image and basic info of student
 */
function StudentList(props) {
  const {
    data,
    selectedCohort,
    studentShowDetail,
    studentShowDetailHandler,
    comments,
    commentsHandler,
  } = props;

  const selectedStudents = selectedCohortStudent(data, selectedCohort);

  const studentCards = selectedStudents.map((selectedStudent, index) => {
    return (
      <Student
        studentInfo={selectedStudent}
        key={index}
        studentShowDetail={studentShowDetail}
        studentShowDetailHandler={studentShowDetailHandler}
        comments={comments}
        commentsHandler={commentsHandler}
      />
    );
  });

  return (
    <div className="studentList">
      <h2>{parseCohortCode(selectedCohort)}</h2>
      <h3>
        Total Students:{" "}
        <span className="studentNum">{studentCards.length}</span>
      </h3>
      {studentCards}
    </div>
  );
}

export default StudentList;
