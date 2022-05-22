import React from 'react';
import './Student.css';
import ShowMore from './ShowMore';
class Student extends React.Component {
constructor() {
  super();
  this.state = {
    displayshowMore: false,
  }




}

updateShowMore = () => {
  let copyOfShowMore = this.state.showMore
   if(copyOfShowMore === true ) {
    copyOfShowMore = false;
   }
   else {
    copyOfShowMore = true;
   }
  
  
  console.log("currentstate", this.state.displayshowMore)
  this.setState({
    displayshowMore: copyOfShowMore
    //Makes it true then it makes it false

  })
}


  render() {
    const {
      stuCard: {
        username,
        names,
        dob,
        profilePhoto,
        codewars,
        certifications,
        cohort,
      },
    } = this.props;

    const dobFormatted = new Date(dob).toDateString().substring(4);
    return (
      //console.log(this.state.showMore)
      <article className="stucard">
        <img src={profilePhoto} alt="student" />
        <h3>
          {names.preferredName} {names.middleName[0]}. {names.surname}
        </h3>
        <p>{username}</p>
        <p> Birthday: {dobFormatted}</p>
        <button onClick={ this.updateShowMore} href="#"> {this.state.displayshowMore ? "Show Less" : "Show More" }</button>
        
       {this.state.displayshowMore ? <ShowMore stuObject = {this.props.stuCard}    /> :null}

       






      </article>
    );
  }
}

export default Student;