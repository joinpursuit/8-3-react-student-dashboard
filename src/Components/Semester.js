import data from '../data/data.json';

function Semester({ handleClick }) {
  const allSemesters = [
    'All Students',
    'Winter 2026',
    'Fall 2026',
    'Summer 2026',
    'Spring 2026',
    'Winter 2025',
    'Fall 2025',
    'Summer 2025',
    'Spring 2025',
  ];

  // Interesting idea to work on in the future:
  // const cohortCode = data.map( (student) => student.cohort.cohortCode )
  // const deduplicate = new Set(cohortCode)
  // const allSemesters = ["AllStudent", ...deduplicate]

  const displaySemesters = allSemesters.map((semester) => (
    <div key={semester}>
      <h3 onClick={handleClick}>{semester}</h3>
      <hr></hr>
    </div>
  ));
  return <section>{displaySemesters}</section>;
}
export default Semester;
