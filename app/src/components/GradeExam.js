import React, { useState } from "react";

function GradeExam(props) {
  const { professor } = props;

  const [grade, setGrade] = useState({
    name: "",
    from: "",
    student: "",
    grade: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGrade({
      ...grade,
      from: `${professor.name} ${professor.surname}`,
    });
  };

  return (
    <div className="grade-exam">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ime predmeta</label>
        <input
          name="name"
          type="text"
          value={grade.name}
          onChange={(e) => setGrade(...grade, (grade.name = e.target.value))}
        />
        <label htmlFor="student">Broj indexa studenta</label>
        <input
          name="student"
          type="text"
          value={grade.student}
          onChange={(e) => setGrade(...grade, (grade.student = e.target.value))}
        />
        <label htmlFor="grade">Ocjena</label>
        <input
          name="grade"
          type="text"
          value={grade.grade}
          onChange={(e) => setGrade(...grade, (grade.grade = e.target.value))}
        />
        <button type="submit">Ocijeni</button>
      </form>
    </div>
  );
}

export default GradeExam;
