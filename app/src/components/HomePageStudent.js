import React, { useEffect, useState } from "react";
import Index from "./Index";
import Schedule from "./Schedule";
import WelcomePage from "./WelcomePage";

const HomePageStudent = (props) => {
  const { student } = props;

  return (
    <div>
      <WelcomePage user={student} />
      <Schedule />
      <Index student={student} />
    </div>
  );
};

export default HomePageStudent;
