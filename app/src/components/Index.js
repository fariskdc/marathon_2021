import React from "react";
import PrintGrades from "./PrintGrades";


const Index = (props) => {
  const {student} = props
  return (
    <div>
      <h1>Stranica Indexa</h1>
      <h2>Isprintaj ocjene</h2>
      
      <PrintGrades student={student}/>
    </div>
  );
};

export default Index;
