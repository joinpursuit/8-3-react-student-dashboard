import React from "react";
//import { forwardRef, useRef } from "react"

class ToggleButton extends React.Component {
  constructor(props, ref) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isShowMore: false,
      display: '',
    };
  }

  handleClick() {
    console.log(this.props.studentList)
    console.log(this.props.studentId)

    
    console.log(this.state.isShowMore)
    this.setState({
      isShowMore: !this.state.isShowMore,
      //display: 'block',
    }, () => {
        //this.props.checkoutValid()
        console.log(this.state.isShowMore)

        if(!this.state.isShowMore){
          this.setState({display: ''})
        } else {
          this.getStudentDetails(this.props.studentList, this.props.studentId)
        }
      });
  }

  getStudentDetails(students, id) {
    const studentData = students.filter(student => student.id === id);
    
    const result = 
    studentData.map(e => { 
      return <>
        <div className="container"> 
            <div> 
              <h4>Codewars: </h4>
              <ul>
                <li><span>Current total:</span> {e.codewars.current.total}</li>
                <li><span>Last week:</span> {e.codewars.current.lastWeek}</li>
                <li><span>Goal:</span> {e.codewars.goal.total}</li>
              </ul>
            </div>
            <div>
              <h4>Scores:</h4>
              <ul>
                <li><span>Assignments:</span> {e.cohort.scores.assignments}</li>
                <li><span>Projects:</span> {e.cohort.scores.projects}</li>
                <li><span>Assessments:</span> {e.cohort.scores.assessments}</li>
              </ul>  
            </div>
            <div>
              <h4>Certifications:</h4>
              <ul>
                <li><span>Resume:</span> {e.certifications.resume}</li>
                <li><span>Linkedin:</span> {e.certifications.linkedin}</li>
                <li><span>Mock Interview:</span> {e.certifications.mockInterview}</li>
                <li><span>Github:</span> {e.certifications.github}</li>
              </ul>
            </div>
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