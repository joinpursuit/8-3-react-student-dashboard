import React from "react";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { forwardRef, useRef } from "react"

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isShowMore: false,
      display: '',
      onTrack: false,
    };
  }

  handleClick() {
    this.setState({
      isShowMore: !this.state.isShowMore,
    }, () => {
        //this.props.checkoutValid()
        console.log(this.state.isShowMore)

        if(!this.state.isShowMore){
          this.setState({display: ''})
        } else {
          this.getStudentDetails(this.props.studentList, this.props.studentId)
        }
      }, () => this.props.checkoutValid(this.state.onTrack));
  }

  

  getStudentDetails(students, id) {
    const studentData = students.filter(student => student.id === id);
    
    const result = 
    studentData.map((e, i) => { 
      
      return <>
        <div className="container"> 
            <div> 
              <h4>Codewars: </h4>
              <table>
                <tr>
                  <td><span>Current total:</span></td><td> {e.codewars.current.total}</td>
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
                  <td><span>Resume:</span></td><td> {e.certifications.resume} </td>
                </tr>
                <tr>
                  <td><span>Linkedin:</span></td><td> {e.certifications.linkedin}</td>
                </tr>
                <tr>
                  <td><span>Mock Interview:</span></td><td> {e.certifications.mockInterview}</td>  
                </tr>
                <tr>
                  <td><span>Github:</span></td><td> {e.certifications.github}</td>  
                </tr>
              </table>
            </div>
            <div>Percent of Goal Achieved: </div>
        </div>
      </>
    });

    this.setState({
      display: result,
    })
  }

  render() {
    //const { label = "More", actionToPerform } = this.props;
    const { isShowMore } = this.state;
    let btnLabel=this.state.isShowMore ? "Show Less" : "Show More...";
    return (
      <>
       <button onClick={this.handleClick} display={this.state.display}>{btnLabel}</button>
       <>{this.state.display}</>
    </>
    )
  }
}

export default ToggleButton;