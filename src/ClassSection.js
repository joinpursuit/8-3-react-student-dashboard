import React from "react";
import "./ClassSection.css";
import CreateClass from "./CreateClass";

const ClassSection = ({ studentArray, classListArray, handleClick }) => {
  const cohorts = new Set(classListArray); //this will create a Set of cohortCodes, not allowing repeats
  //Array.from(cohorts);

  return (
    <div>
      <h2>Choose a Class by Start Date</h2>
      <h4
        className="All"
        onClick={(event) => {
          const text = event.target.textContent;
          handleClick(text, studentArray);
        }}
      >
        All Classes
      </h4>
      {[...cohorts].map((cohort) => {
        return (
          <CreateClass
            cohort={cohort}
            key={cohort}
            handleClick={(event) => {
              const text = event.target.textContent;
              const code = text.split(" ").join("");
              handleClick(code, studentArray);
            }}
          />
        );
      })}
    </div>
  );
};

export default ClassSection;
