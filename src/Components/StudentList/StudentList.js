import "./StudentList.scss";

import { Component } from "react";
import moment from "moment";

import ShowMore from "./ShowMore";
import ShowMoreButton from "./ShowMoreButton";

class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
      studentID: null,
    };
  }

  renderStudentsAndTotal = () => {
    const { studentData, cohortCode } = this.props;

    let totalStudents = 0;
    let keyNum = 0;

    const students = studentData.map((students) => {
      let middleInitial = students.names.middleName.charAt(0).toUpperCase();

      if (cohortCode === "All Students") {
        totalStudents++;

        return (
          <article key={keyNum++} className="studentCard">
            <img
              className="studentPhoto"
              src={students.profilePhoto}
              alt="studentPhoto"
            />
            <section className="studentInfo">
              <p className="studentName">
                <strong>
                  {students.names.preferredName} {middleInitial}.{" "}
                  {students.names.surname}
                </strong>
              </p>
              <p className="studentUsername">{students.username}</p>
              <p className="studentDOB">
                <strong className="DOB">Date of Birth: </strong>
                {this.convertDOB(students.dob)}
              </p>
              <ShowMoreButton
                handleShowMore={this.handleShowMore}
                students={students}
                showMore={this.state.showMore}
                studentID={this.state.studentID}
              />
            </section>
            <ShowMore
              students={students}
              showMore={this.state.showMore}
              studentID={this.state.studentID}
            />
          </article>
        );
      } else {
        if (students.cohort.cohortCode === cohortCode) {
          totalStudents++;
          return (
            <article key={keyNum++} className="studentCard">
              <img
                className="studentPhoto"
                src={students.profilePhoto}
                alt="studentPhoto"
              />
              <section className="studentInfo">
                <p className="studentName">
                  <strong>
                    {students.names.preferredName} {middleInitial}.{" "}
                    {students.names.surname}
                  </strong>
                </p>
                <p className="studentUsername">{students.username}</p>
                <p className="studentDOB">
                  <strong className="DOB">Date of Birth: </strong>
                  {this.convertDOB(students.dob)}
                </p>
                <div
                  className="showMoreButton"
                  onClick={() => this.handleShowMore(students)}
                >
                  {this.state.showMore ? "Show less..." : "Show more..."}
                </div>
              </section>
              <ShowMore
                students={students}
                showMore={this.state.showMore}
                studentID={this.state.studentID}
              />
            </article>
          );
        }
      }

      return null;
    });

    return (
      <section>
        <p>
          Total Students: <strong id="studentCount">{totalStudents}</strong>
        </p>
        <section className="StudentList">{students}</section>
      </section>
    );
  };

  convertDOB = (dob) => {
    const date = new Date(dob);
    const dateFormatted = moment(date).format("MMMM D, Y");
    return dateFormatted;
  };

  handleShowMore = (studentid) => {
    this.setState({
      showMore: !this.state.showMore,
      studentID: studentid,
    });
  };

  render() {
    const { cohortCode } = this.props;

    return (
      <section>
        <h1>{cohortCode}</h1>
        {this.renderStudentsAndTotal()}
      </section>
    );
  }
}

export default StudentList;
