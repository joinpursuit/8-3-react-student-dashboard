import React from "react";
// import Deets from "./Deets"

class Student extends React.Component {

    // showMore = (studentInfo, comments, commentStuff) => {
    //     return(
    //         <Deets studentInfo={studentInfo} comments={comments} commentStuff={commentStuff} />
    //     )
    // };

    render(){
        const {studentInfo} = this.props;
        // const Birthday = studentInfo.dob;
        // const email = studentInfo.username;
        // const imgSrc = studentInfo.profilePhoto;
        // const name = `${studentInfo.names.preferredName} ${studentInfo.names.middleName[0]}, ${studentInfo.names.surname}`;
        const {
            comments,
            commentStuff,
            deets,
            deetsNstuff,
        } = this.props

        return (
            <div className="student">
                <img src="https://fakeface.rest/thumb/view?gender=female&minimum_age=48" alt="🍌"/>
                <p>Banana Woman</p>
                <p>bananawoman@pursuit.org</p>
                <p>Birthday: 6/9/420</p>
                <button onClick={()=> deetsNstuff(studentInfo.id)}>
                    {deets.includes(studentInfo.id) ? 'Show Less' : 'Show More'}
                </button>
                {deets.includes(studentInfo.id) ? this.showMore(studentInfo, comments, commentStuff) : null}
            </div>
        );
    }
}

export default Student;