import React, { useEffect, useState } from "react";
import axios from "axios";


const HomePageStudent = () => {
  

  

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
    <div>
      <h1> Dobro došao ime </h1>
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
