import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const HomePageStudent = (props) => {
  const { student } = props;
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => {
        setLoading(false);
        setQuote(res.data[17].text);
        setAuthor(res.data[17].author);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
    console.log(props);
  }, []);

  return (
    <div>
      <NavBar />
      <h1> Dobro došao {student.name} </h1>
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
