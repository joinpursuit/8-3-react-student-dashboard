import Details from "./Details";
import "./Student.css";

/**
 * Format the given birthday
 * @param {String} birthday -birthday in the format of month/day/year
 * @returns formatted birthday Ex: 2/3/1979 becomes February 3, 1979
 */
const parseBirthday = (birthday) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(birthday);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
};

/**
 * Check to see if the student meet the graduate requirements
 * @param {Object} studentInfo - student object that contains info of the student
 * @returns boolean value depend on the student satisfy the requirements or not
 */
const checkGraduateStatus = (studentInfo) => {
  const { resume, linkedin, github, mockInterview } =
    studentInfo.certifications;

  const currentCodeWarScore = studentInfo.codewars.current.total;

  return (
    resume && linkedin && github && mockInterview && currentCodeWarScore >= 600
  );
};

/**
 * Render the Show More Component with the given student info
 * @param {Object} studentInfo - student object that contains info of the student
 * @param {Object} comments - // object that contains comments ,key is the different student ids,
 * value is array of comments
 * @param {function} commentsHandler
 * @returns instance of Details Component
 */
const showMoreHandler = (studentInfo, comments, commentsHandler) => {
  return (
    <Details
      studentInfo={studentInfo}
      comments={comments}
      commentsHandler={commentsHandler}
    />
  );
};

//Renders the student card
//Each student card contains image and basic info of student, and show more button
function Student(props) {
  const { studentInfo } = props;
  const { preferredName, middleName, surname } = studentInfo.names;
  const name = `${preferredName} ${middleName[0]}. ${surname}`;
  const imgSrc = studentInfo.profilePhoto;
  const email = studentInfo.username;
  const Birthday = studentInfo.dob;

  const {
    studentShowDetail,
    studentShowDetailHandler,
    comments,
    commentsHandler,
    index,
  } = props;

  return (
    <div className="student">
      <img src={imgSrc} alt={name} />
      <div>
        <p className="bold largeSize">{`${name} #${index + 1}`}</p>
        <p>{email}</p>
        <p>
          <span className="green">Birthday:</span> {parseBirthday(Birthday)}
        </p>
      </div>
      <div className="graduateStatus">
        <p>
          {checkGraduateStatus(studentInfo) ? "On Track To Graduate" : null}
        </p>
      </div>
      <div
        className="button"
        onClick={() => studentShowDetailHandler(studentInfo.id)}
      >
        {studentShowDetail.includes(studentInfo.id)
          ? `Show Less...`
          : `Show More...`}
      </div>
      {studentShowDetail.includes(studentInfo.id)
        ? showMoreHandler(studentInfo, comments, commentsHandler)
        : null}
    </div>
  );
}

export default Student;
