import React from "react";
import WelcomePage from "./WelcomePage";
import Schedule from "./Schedule";
import Index from "./Index";

const HomePageProfessor = (props) => {
  const { professor } = props;
  return (
    <div>
      <WelcomePage user={professor} />
      <Schedule />
      <Index professor={professor} />
    </div>
  );
};

export default HomePageProfessor;
