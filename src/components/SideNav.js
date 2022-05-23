import Cohorts from "./CohortNameFormat";

const CohortList = ({ data, setList, setTitle }) => {
  return (
    <div className="cohorts">
      <h3>Choose a Class by Start Date</h3>
      <ul>
        <li>
          <button
            onClick={() => {
              setList(data);
              setTitle("All Students");
            }}
          >
            All Students
          </button>
        </li>
        <section className="line" />
        <Cohorts data={data} setList={setList} setTitle={setTitle} />
      </ul>
    </div>
  );
};

export default CohortList;
