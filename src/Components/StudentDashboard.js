import Student from './Student';

function StudentDashboard({ code, cohort, allStudents }) {

  function byCohort(student) {
    return code === 'AllStudents'
      ? student
      : student.cohort.cohortCode === code;
  }

  const students = allStudents.filter(byCohort).map((student) => (
    <div key={student.id}>
      <Student student={student} />
    </div>
  ));

  return (
    <section className="student dashboard">
      <h2>{cohort}</h2>
      <p>Total Students: {students.length}</p>
      {students}
    </section>
  );
}

export default StudentDashboard;
