import React from "react";
import StudentCommentsForm from "./StudentCommentsForm";
import StudentCommentsList from "./StudentCommentsList";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isShowMore: false,
      academicData: '',
      onTrack: false,
      achieved: '',
    };
  }

  handleClick() {
    this.setState({
      isShowMore: !this.state.isShowMore,
    }, () => {
        //this.props.checkoutValid()
        //console.log(this.state.isShowMore)

        if(!this.state.isShowMore){
          this.setState({academicData: ''})
        } else {
          this.getStudentDetails(this.props.studentList, this.props.studentId)
        }
      });
  }

  validateGoal(score) {
    // >> 
    let scoreCheck = '';
    if(score >= 100) {
      this.setState({
        achieved: 'green',
      })  
      scoreCheck = 'green';
    }
    if(score >= 50 && score < 100) {
      this.setState({achieved: 'yellow',})
      scoreCheck = 'yellow';  
    } else {
      this.setState({achieved: 'red',})
      scoreCheck = 'red';  
    }

    return <span className={scoreCheck}>{score}</span>
  }

  getStudentComments(students) {
    
    (students).map((student, index) => {
      console.log(student.notes[index])
      console.log(student.notes[index].commenter)
      // console.log(student.notes[0].comment)
      // return <li key={index}><span>{student.notes[0].commenter}</span> {student.notes[0].comment}</li>;
    })  
  }

  getStudentDetails(students, id) {
    const studentById = students.filter(student => student.id === id);
    const academicData = studentById.map((e, i) => { 
      
      return <>
        <div className="container"> 
            <div> 
              <h4>Codewars: </h4>
              <table className="data certifications">
                <tr>
                  <td><span>Current total:</span></td><td> {this.validateGoal(e.codewars.current.total)}</td>
                </tr>
                <tr>
                  <td><span>Last week:</span></td><td> {e.codewars.current.lastWeek}</td>
                </tr>
                <tr>
                  <td><span>Goal:</span></td><td> {e.codewars.goal.total}</td>
                </tr>
              </table>
            </div>
            <div>
              <h4>Scores:</h4>
              <table>
                <tr>
                  <td><span>Assignments:</span></td><td> {(e.cohort.scores.assignments)*100}%</td>
                </tr>
                <tr>
                  <td><span>Projects:</span></td><td> {(e.cohort.scores.projects)*100}%</td>
                </tr>
                <tr>
                  <td><span>Assessments:</span></td><td> {(e.cohort.scores.assessments)*100}%</td>
                </tr>
              </table> 
            </div>
            <div>
              <h4>Certifications:</h4>
              <table>
                <tr>
                  <td><span>Resume:</span></td><td> 
                    {e.certifications.resume ? <i className="fa fa-check-circle green"></i> : <i class="fa fa-minus-circle red"></i>}
                  </td>
                </tr>
                <tr>
                  <td><span>Linkedin:</span></td><td> 
                    {e.certifications.linkedin ? <i className="fa fa-check-circle green"></i> : <i class="fa fa-minus-circle red"></i>}
                  </td>
                </tr>
                <tr>
                  <td><span>Mock Interview:</span></td><td> 
                    {e.certifications.mockInterview ? <i className="fa fa-check-circle green"></i> : <i class="fa fa-minus-circle red"></i>}
                  </td>  
                </tr>
                <tr>
                  <td><span>Github:</span></td><td> 
                    {e.certifications.github ? <i className="fa fa-check-circle green"></i> : <i class="fa fa-minus-circle red"></i>}
                  </td>  
                </tr>
              </table>
            </div>
            <div>Percent of Goal Achieved: </div>
        </div>
        <section className="comments">
          <StudentCommentsForm studentList={this.props.studentList}/>  
        </section>
        <section className="comment-list">
          <StudentCommentsList student={studentById}/>
        </section>
      </>
    });

    this.setState({
      academicData: academicData,
    })
  }

  render() {
    //const { label = "More", actionToPerform } = this.props;
    const { isShowMore } = this.state;
    let btnLabel=this.state.isShowMore ? "Show Less" : "Show More...";
    return (
      <>
        <section className="academic-data">
          <button onClick={this.handleClick} display={this.state.display}>{btnLabel}</button>
          {this.state.academicData}  
        </section>
      </>
    )
  }
}

export default ToggleButton;