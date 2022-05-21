import "./StudentCard.css";
import ShowMore from "./ShowMore";

const formatBirthdayText = (birthday) => {
  const newBirthday = birthday.split("/");
  let month = "";
  switch (newBirthday[0]) {
    case "1":
      month = "January";
      break;
    case "2":
      month = "February";
      break;
    case "3":
      month = "March";
      break;
    case "4":
      month = "April";
      break;
    case "5":
      month = "May";
      break;
    case "6":
      month = "June";
      break;
    case "7":
      month = "July";
      break;
    case "8":
      month = "August";
      break;
    case "9":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  }
  return `${month} ${newBirthday[1]}, ${newBirthday[2]} `;
};

const graduationCheck = (certifications) => {
  if (
    certifications.resume &&
    certifications.linkedin &&
    certifications.github &&
    certifications.mockInterview
  ) {
    return "On Track to Graduate";
  }
};

const StudentCard = ({ student }) => {
  const { names, profilePhoto, username, dob, certifications } = student;
  return (
    <div className="card">
      <p className="graduation">{graduationCheck(certifications)}</p>
      <h4>{`${names.preferredName} ${names.middleName} ${names.surname}`}</h4>
      <p>{username}</p>
      <img className="profile" src={profilePhoto} alt={names.preferredName} />
      <div className="birthday">
        <p className="green left">Birthday: </p>
        <p className="dob right">{formatBirthdayText(dob)}</p>
      </div>
      <div>
        <ShowMore student={student} />
      </div>
    </div>
  );
};

export default StudentCard;
