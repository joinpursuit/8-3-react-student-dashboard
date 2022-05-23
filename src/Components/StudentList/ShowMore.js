import { Component } from "react";
import { Button, Modal } from "react-bootstrap";

import check from "../../images/checkmark.png";
import cross from "../../images/crossmark.png";

import "./ShowMore.scss";

class ShowMore extends Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
      isOpen: false,
    };
  }

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => this.setState({ isOpen: false });

  showInfo = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
  };

  calculatePercentageOfGoal = (total, goal) => {
    let percentage = total / goal;
    percentage *= 100;
    return percentage.toFixed(0);
  };

  render() {
    const { students } = this.props;

    return (
      <section className="showMoreSection">
        <div className="showMoreButton" id={students.id}>
          <Button
            variant="dark"
            onClick={this.showInfo}
            // onClick={this.openModal}
          >
            {this.state.showMore ? "Show Less..." : "Show More..."}
          </Button>
          {this.state.showMore ? (
            <div className={this.state.showMore ? "hidden" : null}>
              <section className="ShowMoreInfo">
                <section className="codewars">
                  <strong>Codewars: </strong>
                  <br />
                  <br />
                  <p>
                    <strong className="grades">Current Total: </strong>
                    {students.codewars.current.total}
                  </p>
                  <p>
                    <strong className="grades">Last Week: </strong>
                    {students.codewars.current.lastWeek}
                  </p>
                  <p>
                    <strong className="grades">Goal: </strong>
                    {students.codewars.goal.total}
                  </p>
                  <p>
                    <strong className="grades">
                      Percent of Goal Achieved:{" "}
                    </strong>
                    {this.calculatePercentageOfGoal(
                      students.codewars.current.total,
                      students.codewars.goal.total
                    )}
                    %
                  </p>
                </section>
                <section className="scores">
                  <strong>Scores: </strong>
                  <br />
                  <br />
                  <p>
                    <strong className="grades">Assessments: </strong>
                    {students.cohort.scores.assessments * 100}%
                  </p>
                  <p>
                    <strong className="grades">Assignments: </strong>
                    {students.cohort.scores.assignments * 100}%
                  </p>
                  <p>
                    <strong className="grades">Projects: </strong>
                    {students.cohort.scores.projects * 100}%
                  </p>
                </section>
                <section className="certifications">
                  <strong>Certifications: </strong>
                  <br />
                  <br />
                  <p>
                    <strong className="grades">GitHub: </strong>
                    {students.certifications.github ? (
                      <img src={check} alt="checkmark"></img>
                    ) : (
                      <img src={cross} alt="crossmark"></img>
                    )}
                  </p>
                  <p>
                    <strong className="grades">LinkedIn: </strong>
                    {students.certifications.linkedin ? (
                      <img src={check} alt="checkmark"></img>
                    ) : (
                      <img src={cross} alt="crossmark"></img>
                    )}
                  </p>
                  <p>
                    <strong className="grades">Mock Interview: </strong>
                    {students.certifications.mockInterview ? (
                      <img src={check} alt="checkmark"></img>
                    ) : (
                      <img src={cross} alt="crossmark"></img>
                    )}
                  </p>
                  <p>
                    <strong className="grades">Resume: </strong>
                    {students.certifications.resume ? (
                      <img src={check} alt="checkmark"></img>
                    ) : (
                      <img src={cross} alt="crossmark"></img>
                    )}
                  </p>
                </section>
              </section>
            </div>
          ) : null}
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <img
            className="studentPhoto"
            src={students.profilePhoto}
            alt="studentPhoto"
          />
          <Modal.Header closeButton>
            <Modal.Title>
              {students.names.preferredName} {students.names.middleName}{" "}
              {students.names.surname}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}

export default ShowMore;
