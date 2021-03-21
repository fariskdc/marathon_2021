import React from "react";
import PrintGrades from "./PrintGrades";
import GetSubjects from "./GetSubjects";

const Index = (props) => {
  const { student } = props;
  return (
    <div className="index-page">
      <h1>Stranica Indexa</h1>
      <GetSubjects />
      <PrintGrades student={student} />
    </div>
  );
};

export default Index;
