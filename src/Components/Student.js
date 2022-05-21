import React from "react";

export default function Student({ semester }) {
  const studentPreferredName = semester.names.preferredName;
  const studentMiddleName = semester.names.middleName;
  const studentSurName = semester.names.surname;
  const profilePicture = semester.profilePhoto;
  const emailAddress = semester.username;
  const studentBirthday = semester.dob;

  const graduationStatus = (student) => {
    const resumeStatus = student.certifications.resume;
    const linkedinStatus = student.certifications.linkedin;
    const githubStatus = student.certifications.github;
    const mockInterviewStatus = student.certifications.mockInterview;
    const codeWarsStatus = student.codewars.current.total;

    if (
      codeWarsStatus > 600 &&
      resumeStatus &&
      linkedinStatus &&
      githubStatus &&
      mockInterviewStatus
    ) {
      return <div>On Track To Graduate</div>;
    }
    return null;
  };

  const convertBirthDate = (string) => {
    const months = [
      "January ",
      "February ",
      "March ",
      "April ",
      "May ",
      "June ",
      "July ",
      "August ",
      "September ",
      "October ",
      "November ",
      "December ",
    ];

    const newStr = string.substring(string.length - 5);
    let newEnd = newStr.replace("/", ", ");
    let newBeg = string.split("/");
    newBeg.pop();
    for (let i = 1; i < months.length; i++) {
      if (newBeg[0] === i.toString()) {
        newBeg.splice(0, 1, months[i]);
        let start = newBeg.join("");
        const convertedDate = start + newEnd;
        return convertedDate;
      }
    }
  };

  return (
    <div className="studentBio">
      <img
        src={profilePicture}
        className="profilePic"
        alt="student headshot"
      ></img>
      <div className="studentInformation1">
        <p>
          <strong>
            {studentPreferredName +
              " " +
              studentMiddleName +
              " " +
              studentSurName}
          </strong>
        </p>
        <p>{emailAddress}</p>
        <p>Birthday: {convertBirthDate(studentBirthday)}</p>
        <div id="showMore">Show More...</div>
      </div>
      <section id="graduationTracker">{graduationStatus(semester)}</section>
    </div>
  );
}
