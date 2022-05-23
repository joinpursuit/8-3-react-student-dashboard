import React from "react";
import ShowMore from "./ShowMore";

const ImprovedStudentDetailsList = (props) => {
    
Students.map((student) => {

	
	
	
})
	return (
		<div className="student" id={studentInfo.id}>
			<div className="basic-student-info">
				<div className="name-photo">
					<div>
						<img
							src={studentInfo.profilePhoto}
							alt={studentInfo.id}
							className="student-photo"
						/>
					</div>
					<div>
						<h4>{nameFormatter(studentInfo.names)}</h4>
					</div>
				</div>
				<div>
					<p className="email-address">
						<a href={`mailto:${studentInfo.username}`}>{studentInfo.username}</a>
					</p>
				</div>
				<div>
					<p>
						Date of Birth:{" "}
						{new Date(studentInfo.dob).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
				</div>
			</div>
			<div className="on-track">
				<p>{onTrackToGraduate}</p>
			</div>
			<ShowMore studentInfo={studentInfo} key={studentInfo.id} />
		</div>
	);
};


export default ImprovedStudentDetails;