import OneStudent from "./oneStudent";

function studentList({ array }) {
  return (
    <div>
      <p>Total Students: {array.length}</p>
      {array.map((elm) => {
        return <OneStudent student={elm} key={elm.id} />;
      })}
    </div>
  );
}

export default studentList;
