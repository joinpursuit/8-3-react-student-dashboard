function CohortList({ handleClick, Data }) {
  const cohortCode = Data.map(
    (student) => student.cohort.cohortCode.replace(/\B(?=(\d{4})+(?!\d))/g, " ") //stackoverflow space month and year
  );
  const deduped = new Set(cohortCode);
  const allSemesters = [...deduped];

  //stackoverflow order months
  let months = { Winter: 1, Fall: 2, Summer: 3, Spring: 4 };
  allSemesters.sort((a, b) => {
    let first = a.split(" ");
    let second = b.split(" ");
    return second[1] - first[1] || months[first[0]] - months[second[0]];
  });

  const displaySemesters = allSemesters.map((semester) => (
    <div key={semester}>
      <h3 className="left" onClick={() => handleClick(semester)}>
        {semester}
      </h3>
      <hr />
    </div>
  ));
  return (
    <section>
      <h2>Choose a Class by Start Date</h2>
      <h3 className="left" onClick={() => handleClick(null)}>
        All Students
      </h3>
      <hr />
      {displaySemesters}
    </section>
  );
}
export default CohortList;
