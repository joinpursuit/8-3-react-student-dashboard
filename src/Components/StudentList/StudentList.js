import "./StudentList.scss";

import { Component } from "react";
import moment from "moment";

import ShowMore from "./ShowMore";

class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
    };
  }

  renderStudentsAndTotal = () => {
    const { studentData } = this.props;

    let totalStudents = 0;
    let keyNum = 0;

    const students = studentData.map((students) => {
      // console.log(students);

      let middleInitial = students.names.middleName.charAt(0).toUpperCase();

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
          {this.state.showMore ? <ShowMore students={students} /> : null}
        </article>
      );
    });

    totalStudents += students.length;

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

  handleShowMore = (students) => {
    console.log(students);

    this.setState({
      showMore: !this.state.showMore,
    });

    // return (
    //   <div className="showMore">
    //     {this.state.showMore ? <ShowMore students={students} /> : null}
    //   </div>
    // );
  };

  render() {
    return (
      <section>
        <h1>All Students</h1>
        {this.renderStudentsAndTotal()}
      </section>
    );
  }
}

export default StudentList;
