import { render } from "@testing-library/react";
import React from "react";

class StudentStatus extends React.Component {
  constructor(props, ref) {
    super(props);
    
    this.state = {
      // onTrack: false,
    };
  }

  validateStudentStatus = (resume, linkedin, mockInterview, github, codewars) => {
    
    if(resume && linkedin && mockInterview && github && (codewars > 600)) {
      // this.setState({ 
      //   //studentStatus: 'On Track to Graduate',
      //   onTrack: true,
      // });
      return 'On Track to Graduate';
    } else {
      // this.setState({ 
      //   onTrack: false,  
      // });
    }
  }

  render() {
    
    return(
      <>
        {this.validateStudentStatus(this.props.resume, 
                                    this.props.linkedin, 
                                    this.props.mockInterview, 
                                    this.props.github, 
                                    this.props.codewars)}
      </>
    )
  }
}

export default StudentStatus;