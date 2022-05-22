import React from 'react';

function AStudent({ student: { names, username, profilePhoto, dob } }) {
  const dateFormat = new Date(dob).toDateString().substring(4);
  return (
    <>
      <section>
        <aside>
          <article className='student-info'>
            <img
              src={profilePhoto}
              alt={names}
              className='profile-photo'
              width={100}
              height={100}
            />
            <h4>
              {names.preferredName} {names.middleName[0]}. {names.surname}
            </h4>
            <h4>
              <em>{username}</em>
            </h4>
            <h4>
              <em>Birthday: {dateFormat}</em>
            </h4>
            <ExpandInfo />
          </article>
        </aside>
      </section>
    </>
  );
}

export default AStudent;
