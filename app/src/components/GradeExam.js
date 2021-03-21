import React, { useState } from "react";
import Nexmo from "nexmo";

function GradeExam(props) {
  const { professor } = props;

  const [grade, setGrade] = useState({
    name: "",
    student: "",
    grade: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const nexmo = new Nexmo({
      apiKey: "96f1cab9",
      apiSecret: "K8XIZGrywOAo85xp",
    });

    const from = `${professor.name} ${professor.surname}`;
    const to = "387644020191";
    const text = `${grade.name}, Ocjena: ${grade.grade}`;

    nexmo.message.sendSms(from, to, text);
  };

  return (
    <div className="grade-exam">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ime predmeta</label>
        <input
          name="name"
          type="text"
          value={grade.name}
          onChange={(e) => setGrade(e.target.value)}
        />
        <label htmlFor="grade">Ocjena</label>
        <input
          name="grade"
          type="text"
          value={grade.grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <button type="submit">Ocijeni</button>
      </form>
    </div>
  );
}

export default GradeExam;
