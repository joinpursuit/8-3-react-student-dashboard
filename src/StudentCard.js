import "./StudentCard.css";

const showHidden = () => {
  document.querySelectorAll(".truncated").forEach((current) => {
    current.addEventListener(
      "click",
      (e) => {
        current.classList.remove("truncated");
      },
      false
    );
  });
};

const StudentCard = ({ student }) => {
  const { names, profilePhoto, username, dob } = student;
  return (
    <div className="card">
      <h5>{`${names.preferredName} ${names.middleName} ${names.surname}`}</h5>
      <p>{username}</p>
      <img src={profilePhoto} alt={names.preferredName} />
      <p>{`Birthday: ${dob}`}</p>
      <div className="truncated">
        <p onClick={() => showHidden()}>Show More..</p>
        <p>CodeWars</p>
        <p>Scores</p>
        <p>Certifications</p>
      </div>
    </div>
  );
};

export default StudentCard;
