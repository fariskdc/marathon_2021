import React, { useEffect, useState } from "react";
import GetSubjects from "./GetSubjects";
import Index from "./Index";
import Schedule from "./Schedule";
import WelcomePage from "./WelcomePage";

const HomePageStudent = (props) => {
  const { student } = props;

  return (
    <div>
      <WelcomePage student={student} />
      <Schedule />
      <Index student={student} />
      <GetSubjects />
      

    </div>
  );
};

export default HomePageStudent;
