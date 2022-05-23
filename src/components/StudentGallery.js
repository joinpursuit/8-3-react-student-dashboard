import StudentProfile from "./StudentProfile";

function StudentGallery({ Data, cohortSemester }) {
  const students = Data.map((stu) => (
    <section key={stu.id}>
      <StudentProfile student={stu} />
    </section>
  ));
  return (
    <article className="student-gallery">
      <h2>{cohortSemester}</h2>
      <h3>
        Total Students: <span className="green">{students.length}</span>
      </h3>
      {students}
    </article>
  );
}

export default StudentGallery;
