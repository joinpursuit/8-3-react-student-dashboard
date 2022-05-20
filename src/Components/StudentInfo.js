import React from 'react';

function StudentInfo({ student: { names, username, profilePhoto, dob } }) {
	return (
		<>
			<section>
				<aside>
				<article className='student-info'>
					<img src={profilePhoto} alt={names} className="profile-photo" />
					<h4>
						{names.preferredName} {names.middleName[0]}. {names.surname}
					</h4>
					<h4><em>{username}</em></h4>
					<h4><em>Birthday: {dob}</em></h4>
					<button>Show More</button>
				</article>
				</aside>
			</section>
		</>
	);
}

export default StudentInfo;
