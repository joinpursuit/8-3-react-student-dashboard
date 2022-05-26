import React from "react";
import StudentComments from "./StudentComments";

class ShowDetailsButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.iconCheck = <i className="fa fa-check-circle green"></i>;
    this.iconMinus = <i className="fa fa-minus-circle red"></i>;

    this.state = {
      isShowMore: false,
      academicData: '',
      onTrack: false,
      comments: '',
    };
  } 

  handleClick() {
    this.setState({
      isShowMore: !this.state.isShowMore,
    }, () => {
        if(!this.state.isShowMore){
          this.setState({academicData: ''})
        } else {
          this.getStudentDetails(this.props.studentList, this.props.studentId)
        }
      });
  }

  validateGoal(current, goal) {
    const score = (((current/goal))*100).toFixed();
    // >> Validating score
    let scoreCheck = '';
    if(score >= 100) {
      scoreCheck = 'green';
    }
    if(score >= 50 && score < 100) {
      scoreCheck = 'yellow';  
    } 
    if(score < 50) {
      scoreCheck = 'red';  
    }

    return <span className={scoreCheck}>{score}%</span>
  }

  getStudentDetails(students, id) {
    const studentById  = students.filter(student => student.id === id),
          academicData = studentById.map(e => 
      <>
        <div className="container"> 
            <div> 
              <h4>Codewars: </h4>
              <table className="data certifications">
                <tr><td><span>Current total:</span></td><td> {e.codewars.current.total}</td></tr>
                <tr><td><span>Last week:</span></td><td> {e.codewars.current.lastWeek}</td></tr>
                <tr><td><span>Goal:</span></td><td> {e.codewars.goal.total}</td></tr>
              </table>
            </div>
            <div>
              <h4>Scores:</h4>
              <table>
                <tr><td><span>Assignments:</span></td><td> {(e.cohort.scores.assignments)*100}%</td></tr>
                <tr><td><span>Projects:</span></td><td> {(e.cohort.scores.projects)*100}%</td></tr>
                <tr><td><span>Assessments:</span></td><td> {(e.cohort.scores.assessments)*100}%</td></tr>
              </table> 
            </div>
            <div>
              <h4>Certifications:</h4>
              <table>
                <tr><td><span>Resume:</span></td><td>{e.certifications.resume ? this.iconCheck : this.iconMinus}</td></tr>
                <tr><td><span>Linkedin:</span></td><td>{e.certifications.linkedin ? this.iconCheck : this.iconMinus}</td></tr>
                <tr><td><span>Mock Interview:</span></td><td>{e.certifications.mockInterview ? this.iconCheck : this.iconMinus}</td>  </tr>
                <tr><td><span>Github:</span></td><td>{e.certifications.github ? this.iconCheck : this.iconMinus}</td></tr>
              </table>
            </div>
          </div>
        <div className="goal-achieved">Percent of Goal Achieved: {this.validateGoal(e.codewars.current.total, e.codewars.goal.total)}</div>
        <div className="comments">
          <StudentComments comments={e.notes}/>  
        </div>
      </>);
    // >> 
    this.setState({
      academicData : academicData,
    })
  }

  render() {
    const { isShowMore } = this.state;

    let btnLabel = isShowMore ? "Show Less" : "Show More...";
    let btnClass = isShowMore ? "less" : "more";
    return (
      <>
        <section className="academic-data">
          <button className={btnClass} onClick={this.handleClick} display={this.state.display}>{btnLabel}</button>
          {this.state.academicData}  
        </section>
      </>
    )
  }
}

export default ShowDetailsButton;