import React, { useEffect, useState } from "react";
import axios from "axios";

function GetSubjects(props) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/subjects",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const subjects = res.data;
        setSubjects(subjects);
      })
      .catch((err) => console.log(err));
  }, []);

  const subjectItems = subjects.map((subject) => <li>{subject.name}</li>);

  return (
    <div className="subject-list">
      <ul>
        <h1> Predmeti:</h1>
        {subjectItems}
      </ul>
    </div>
  );
}

export default GetSubjects;
