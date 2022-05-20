import Student from './Student';

function StudentDashboard({ code, cohort, showMore, toggleShowMore, allStudents }) {

  function byCohort(student) {
    return code === 'AllStudents'
      ? student
      : student.cohort.cohortCode === code;
  }

  const students = allStudents.filter(byCohort).map((student) => (
    <div key={student.id} className="student-countainer">
      <Student toggleShowMore={toggleShowMore} showMore={showMore} student={student} />
    </div>
  ));

  return (
    <section className="student dashboard">
      <h2>{cohort}</h2>
      <p>Total Students: <span className='color-text'>{students.length}</span></p>
      {students}
    </section>
  );
}

export default StudentDashboard;
