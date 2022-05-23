import React from "react";
import Deets from "./Deets"
import "./Student.css"

const checkBirthday = (birthday) =>{
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
}
const graduate = (studentInfo) => {
    const {resume, linkedin, github, mockInterview} = studentInfo.certifications;
    const codewarsScore = studentInfo.codewars.current.total;
    return (resume && linkedin && github && mockInterview && codewarsScore >= 600)
};

let showMore = (studentInfo, comments, commentStuff) => {
    return(
        <Deets studentInfo={studentInfo} comments={comments} commentStuff={commentStuff} />
    )
};

function Student(props) {
    const {studentInfo} = this.props;
    const Birthday = studentInfo.dob;
    const email = studentInfo.username;
    const imgSrc = studentInfo.profilePhoto;
    const {preferredName, middleName, surname} = studentInfo.names
    const name = `${preferredName} ${middleName[0]}, ${surname}`;
    const { deets,
            deetsNstuff,
            comments,
            commentStuff,
        } = props;

        return (
            <div className="student">
                <img src={imgSrc} alt={name} />
                <div>
                <p>{name}</p>
                <p>{email}</p>
                <p>
                <span className="green">Birthday</span> {checkBirthday(Birthday)}
                </p>
                </div>
                {/* <div className="passfail">
                <button onClick={()=> deetsNstuff(studentInfo.id)}>
                    {deets.includes(studentInfo.id) ? 'Show Less' : 'Show More'}
                </button>
                {deets.includes(studentInfo.id) ? this.showMore(studentInfo, comments, commentStuff) : null}
            </div> */}
            </div>
        );
    }

export default Student;