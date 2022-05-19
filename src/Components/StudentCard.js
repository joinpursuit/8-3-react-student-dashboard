import React from "react";
import "./studentcard.css";
import ExtendedInfo from "./ExtendedInfo.js";

class StudentCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
    };
  }
  showMoreHandler = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
  };
  render() {
    const { names, dob, profilePhoto, username } = this.props.student;
    const { showMore } = this.state;
    const dobFormatted = new Date(dob).toDateString().substring(4);
    const { preferredName, middleName, surname } = names;
    return (
      <div className="card">
        <img className="pic" src={profilePhoto} width={125} height={125} />
        <section className="info">
          <div className="name">
            {preferredName} {middleName[0]}. {surname}
          </div>
          <div className="other">
            {username}
            <br />
            Birthday: {dobFormatted}
            <br />
            <br />
            <div onClick={() => this.showMoreHandler()}>
              {showMore ? "Show Less..." : "Show More..."}
            </div>
            <section>
              {showMore ? (
                <ExtendedInfo
                  student={this.props.student}
                  showMoreHandler={this.showMoreHandler}
                />
              ) : null}
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default StudentCard;
