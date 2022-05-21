function StudentProfile({ student: { names, username, profilePhoto, dob } }) {
  return (
    <article className='profile'>
      <img src={profilePhoto} alt='student' />
      <p>
        {names.preferredName} {names.middleName.charAt()}. {names.surname}
      </p>
      <p>{username}</p>
      <p>
        Birthday:{' '}
        {new Date(dob).toLocaleDateString('en-US', {
          // https://www.tutorialstonight.com/format-javascript-date.php found to convert dob
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <p>Show More...</p>
    </article>
  )
}

export default StudentProfile
// const dobFormatted = new Date(dob).toDateString().substring(4)
