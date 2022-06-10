import Semester from './Semester';

function Cohorts({ filterByClass }) {
  return (
    <section className="filter-class">
      <Semester
        handleClick={(event) =>
          filterByClass(
            event.target.textContent,
            event.target.textContent.split(' ').join('')
          )
        }
      />
    </section>
  );
}

export default Cohorts;
