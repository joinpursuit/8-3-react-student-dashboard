import React from "react";

export default function cohort(props) {
  const { click } = props;
  return (
    <div>
      <h2>Choose a Class by Start Date</h2>
      <h4 id="all" onClick={() => click("All Students")}>
        All Students
      </h4>
      <h4 id="w26" onClick={() => click("Winter2026")}>
        Winter 2026
      </h4>
      <h4 id="f26" onClick={() => click("Fall2026")}>
        Fall 2026
      </h4>
      <h4 id="su26" onClick={() => click("Summer2026")}>
        Summer 2026
      </h4>
      <h4 id="sp26" onClick={() => click("Spring2026")}>
        Spring 2026
      </h4>
      <h4 id="w25" onClick={() => click("Winter2025")}>
        Winter 2025
      </h4>
      <h4 id="f25" onClick={() => click("Fall2025")}>
        Fall 2025
      </h4>
      <h4 id="su25" onClick={() => click("Summer2025")}>
        Summer 2025
      </h4>
      <h4 id="sp25" onClick={() => click("Spring2025")}>
        Spring 2025
      </h4>
    </div>
  );
}
