function Semester({ handleClick }) {
  const allSemesters = [
    'All Students',
    'On Track To Graduate',
    'Winter 2026',
    'Fall 2026',
    'Summer 2026',
    'Spring 2026',
    'Winter 2025',
    'Fall 2025',
    'Summer 2025',
    'Spring 2025',
  ];

  const displaySemesters = allSemesters.map((semester) => (
    <div key={semester}>
      <h3 className="cohort" onClick={handleClick}>
        {semester}
      </h3>
      <hr></hr>
    </div>
  ));
  return (
    <section className="sticky">
      <h2>Choose a Class by Start Date</h2>
      {displaySemesters}
    </section>
  );
}
export default Semester;
