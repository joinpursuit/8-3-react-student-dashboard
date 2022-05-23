import StudentProfile from './StudentProfile'

function StudentList({ data, cohortli}) {
  const student = data.map((student) => (
    <div key={student.id}>
      <StudentProfile student={student} />
    </div>
  ))
  
  return (
    <section className='student-list'>
      <h2>{cohortli}</h2>
      <p>Total Students: {student.length}</p>
      {student}
    </section>
  )
}

export default StudentList
