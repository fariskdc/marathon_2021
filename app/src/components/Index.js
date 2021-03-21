import React from "react";
import PrintGrades from "./PrintGrades";
import SubjectsList from "./SubjectsList";

const Index = (props) => {
  return (
    <div className="index-page">
      <h1>Index</h1>

      <SubjectsList />
      <PrintGrades />
    </div>
  );
};

export default Index;
