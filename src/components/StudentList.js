import React from "react";
import Show from "./Show.js";

const Graduating = (student) => {
     const certifications = Object.values(student.certifications);
     const codeWars = student.codewars.current.total;
     if (codeWars > 600 && !certifications.includes(false)) {
         return true;
     } else {
         return false;
     }
};

class StudentList extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
            person: "",
            comment: "",
            newSubmission: [],
        }
    };

    showMore = () => {
        this.setState({show: !this.state.show,})
    };

    personStuff = (evt) => {
        const { value } = evt.target;
        this.setState({person:value,})
    };

    commentStuff = (evt) => {
        const { value } = evt.target;
        this.setState({comment:value,})
    };

    submitting = (evt) => {
        evt.preventDefault();
        const submission = `${this.state.person} says "${this.state.comment}"`;
        this.setState({newSubmission:[...this.state.newSubmission, submission]});
        console.log(this.state.newSubmission);
    };

    render() {
        const { student } = this.props;
        const { names, dob, profilePhoto, username } = student;
        const { show, person, comment, newSubmission } = this.state;
        const dobFormat = new Date(dob).toDateString().substring(4);
        const { preferredName, middleName, surname } = names;
        return (
          <div className="card">
            <img
              className="pic"
              alt={preferredName}
              src={profilePhoto}
              width={120}
              height={120}
            />
            <section className="info">
              <div className="name">
                {preferredName} {middleName[0]}. {surname}
              </div>
              <div className="other">
                {username} 📧
                <br />
                Birthday: {dobFormat}
                <br />
                <br />
                <div onClick={() => this.showMore()}>
                  {show ? "Show Less..." : "Show More..."}
                </div>
                {show ? (
                  <Show
                    student={student}
                    showMore={this.showMore}
                    person={person}
                    comment={comment}
                    personStuff={this.personStuff}
                    commentStuff={this.commentStuff}
                    submitting={this.submitting}
                    newSubmission={newSubmission}
                  />
                ) : null}
              </div>
            </section>
            <div className="track">
              {Graduating(student) ? "On Track To Graduate" : null}
            </div>
          </div>
        );
      }
    }
    
    export default StudentList;