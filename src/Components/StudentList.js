import StudentProfile from './StudentProfile'

function StudentList({ data, cohortli }) {
  const student = data.map((stu) => (
    <div key={stu.id}>
      <StudentProfile student={stu} />
    </div>
  ))
  return (
    <section className='list'>
      <h2>{cohortli}</h2>
      <p>Total Students: {student.length}</p>
      {student}
    </section>
  )
}

export default StudentList
