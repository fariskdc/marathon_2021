import React from "react";
import PrintGrades from "./PrintGrades";
import SubjectsList from "./SubjectsList";

const Index = (props) => {
  const {student} = props
  return (
    <div>
      <h1>Stranica Indexa</h1>

      <SubjectsList />
      <PrintGrades student={student}/>
    </div>
  );
};

export default Index;
