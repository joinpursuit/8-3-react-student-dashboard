const CohortNameFormat = ({ data, setList, setTitle }) => {
  const deduplicate = [
    ...new Set(data.map((person) => person.cohort.cohortCode)),
  ];

  const formatCohortName = (cohorts) => {
    let text = "";
    let numbers = "";

    for (const cohort of cohorts) {
      if (!isNaN(cohort) * 1) {
        numbers += cohort;
      } else {
        text += cohort;
      }
    }
    return `${text} ${numbers}`;
  };

  const handleClick = (event) => {
    const { value } = event.target;
    const newList = data.filter((student) => {
      return student.cohort.cohortCode === value;
    });

    setList(newList);
    setTitle(formatCohortName(value));
  };

  return deduplicate.map((cohort) => {
    return (
      <div className="cohort">
        <li>
          <button value={cohort} onClick={handleClick}>
            {formatCohortName(cohort)}
          </button>
        </li>
        <section className="line" />
      </div>
    );
  });
};

export default CohortNameFormat;
