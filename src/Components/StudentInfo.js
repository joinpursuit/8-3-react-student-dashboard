import React from 'react';
import ShowMore from './ShowMore';

function StudentInfo(props) {
	const names = props.student.names;
	const username = props.student.username;
	const profilePhoto = props.student.profilePhoto;
	const dob = props.student.dob;
	const resume = props.student.certifications.resume;
	const linkedin = props.student.certifications.resume;
	const github = props.student.certifications.github;
	const mockInterview = props.student.certifications.mockInterview;
	const codewars = props.student.codewars;

	function OnTrackToGraduate(student) {
		const { resume, linkedin, github, mockInterview } = student.certifications;
		const codewarsScore = student.codewars.current.total;
		if (resume && linkedin && github && mockInterview && codewarsScore > 600) {
			return 'On Track To Graduate';
		} else return null;
	}
	return (
		<>
			<section>
				<aside>
					<article className='student-info'>
						<img src={profilePhoto} alt={names} className='profile-photo' />
						<h4>
							{names.preferredName} {names.middleName[0]}. {names.surname}
						</h4>
						<h4>
							<em>{username}</em>
						</h4>
						<h4>
							<em>Birthday: {dob}</em>
						</h4>
						{OnTrackToGraduate(props.student)}
						<ShowMore student={props.student} />
					</article>
				</aside>
			</section>
		</>
	);
}

export default StudentInfo;
