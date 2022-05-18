import Student from './Student';

function StudentDashboard({ cohort, allStudents }) {
  console.log(cohort);

  const students = allStudents.map((student) => (
    <div key={student.id}>
      <Student student={student} />
    </div>
  ));

  return (
    <section className="student dashboard">
      <h2>{cohort}</h2>
      <p>Total Students: 250</p>
      {students}
    </section>
  );
}

export default StudentDashboard;
