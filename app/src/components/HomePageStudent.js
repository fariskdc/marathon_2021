import React, { useEffect, useState } from "react";
import axios from "axios";


const HomePageStudent = () => {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    surname: "",
    semester: 0,
    email: "",
    phone: "",
  });
  
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/students/2105000181505",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setStudent({
          id: res.data.id,
          name: res.data.name,
          surname: res.data.surname,
          semester: res.data.semester,
          email: res.data.email,
          phone: res.data.phone,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setQuote(res.data[17].text);
        setAuthor(res.data[17].author);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  });

  return (
    <div className = 'container'>
      <h3> Dobro došao {student.name} </h3>
      {loading ? (
        "Loading...."
      ) : (
        <h2>
          {" "}
          {quote} by {author}
        </h2>
      )}
    </div>
  );
};

export default HomePageStudent;
