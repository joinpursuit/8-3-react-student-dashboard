import "./CreateClass.css";

const formatCohortCode = (cohortCode) => {
  const splitPoint = cohortCode.length - 4;
  const start = cohortCode.slice(0, splitPoint);
  const end = cohortCode.slice(splitPoint, cohortCode.length);
  return `${start} ${end}`;
};

const CreateClass = ({ cohort, handleClick }) => {
  return (
    <div>
      <h4 className="class-item" onClick={handleClick}>
        {formatCohortCode(cohort)}
      </h4>
    </div>
  );
};

export default CreateClass;
