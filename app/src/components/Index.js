import React from "react";
import PrintGrades from "./PrintGrades";


const Index = (props) => {
  const {student} = props
  return (
    <div>
      <h1>Stranica Indexa</h1>

      
      <PrintGrades student={student}/>
    </div>
  );
};

export default Index;
