import StudentDetails from "./StudentDetails";
import { useState } from "react";

const StudentCard = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="card" id={data.id}>
      <img src={data.profilePhoto} alt={data.names.preferredName} />

      <p className="graduation-status">
        {data.certifications.resume &&
        data.certifications.linkedin &&
        data.certifications.mockInterview &&
        data.certifications.github &&
        data.codewars.current.total > 600
          ? "On Track to Graduate"
          : ""}
      </p>

      <p>
        {data.names.preferredName} {data.names.middleName[0]}.{" "}
        {data.names.surname}
      </p>

      <p>{data.username}</p>

      <p className="dob">
        <span>Birthday: </span>
        {data.dob}
      </p>

      <button onClick={() => setShow(!show)}>
        {show ? "Show Less…" : "Show More…"}
      </button>

      {show ? <StudentDetails student={data} /> : null}
    </div>
  );
};

export default StudentCard;
