import React from "react";
import WelcomePage from "./WelcomePage";
import ScheduleExam from "./ScheduleExam";
import GradeExam from "./GradeExam";

const HomePageProfessor = (props) => {
  const { professor } = props;
  return (
    <div>
      <WelcomePage user={professor} />
      <GradeExam professor={professor} />
    </div>
  );
};

export default HomePageProfessor;
