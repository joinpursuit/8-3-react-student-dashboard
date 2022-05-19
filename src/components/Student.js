import React from "react";

class Student extends React.Component {
    render(){
        return (
            <div className="student">
                <img src="https://fakeface.rest/thumb/view?gender=female&minimum_age=48" />
                <p>Banana Woman</p>
                <p>bananawoman@pursuit.org</p>
                <p>Birthday: 6/9/420</p>
                <button>Show More</button>
            </div>
        );
    }
}

export default Student;