import React from "react";
import PrintGrades from "./PrintGrades";
import SubjectsList from "./SubjectsList";

const Index = (props) => {
  return (
    <div>
      <h1>Stranica Indexa</h1>

      <SubjectsList />
      <PrintGrades />
    </div>
  );
};

export default Index;
