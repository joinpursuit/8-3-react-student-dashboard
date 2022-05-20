import React from 'react';

function StudentInfo({ student: { names, username, profilePhoto, dob } }) {
	return (
		<>
			<section>
				<h2>All Students</h2>
				<p>Total:</p>
				<article className='student-info'>
					<img src={profilePhoto} alt={names} />
					<h4>
						{names.prefferedName} {names.middleName[0]}. {names.surname}
					</h4>
					<p>{username}</p>
					<p>Birthday: {dob}</p>
					<button>Show More</button>
				</article>
			</section>
		</>
	);
}

export default StudentInfo;
