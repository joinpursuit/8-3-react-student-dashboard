import React from "react";
import "./ClassSection.css";
import CreateClass from "./CreateClass";

const ClassSection = ({ studentArray, classListArray, handleClick }) => {
  let cohorts = new Set(classListArray); //this will create a Set of cohortCodes, not allowing repeats
  cohorts = Array.from(cohorts);
  cohorts = cohorts.sort();
  cohorts = cohorts.sort(function (a, b) {
    return (
      a.substring(a.length - 4, a.length) - b.substring(b.length - 4, b.length)
    );
  });
  cohorts = new Set(cohorts);

  return (
    <div className="list">
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
