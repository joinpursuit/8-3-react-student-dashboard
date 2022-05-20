const ShowMoreButton = (props) => {
  const { handleShowMore, students, studentID } = props;

  return (
    <>
      {students.id === studentID ? (
        <div
          className="showMoreButton"
          onClick={() => handleShowMore(students.id)}
        >
          {props.showMore ? "Show Less..." : "Show More..."}
        </div>
      ) : (
        <div
          className="showMoreButton"
          onClick={() => handleShowMore(students.id)}
        >
          Show More...
        </div>
      )}
    </>
  );
};

export default ShowMoreButton;
