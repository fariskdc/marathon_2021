import React, { useEffect, useState } from "react";
import axios from "axios";

function GetSubjects(props) {

  const [subjects, setSubjects] = useState([]);

  const [error, setError] = useState({
    message: "",
    value: false,
  });

  useEffect ( () => {
    axios({
        method: "GET",
        url: "http://localhost:3001/subjects",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          const subjects = res.data;
          //console.log (res.data);
          setSubjects(subjects);
        })
        .catch((err) => console.log(err))
  }, []);

  const subjectItems = subjects.map((subject)=> 
  <li>{subject.name}</li>);

  return (
      <div>

      <ul> Predmeti:
          {subjectItems}
      </ul>
    </div>
  );
}

export default GetSubjects;
