import Cohort from "./cohort";

import React from "react";

export default function cohortList(props) {
  const { click } = props;
  return (
    <div>
      <Cohort click={click} />
    </div>
  );
}
