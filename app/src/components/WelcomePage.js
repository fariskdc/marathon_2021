import React, { useEffect, useState } from "react";
import axios from "axios";

function WelcomePage(props) {
  const { student } = props;
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [quoteNum, setQuoteNum] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => {
        setLoading(false);
        setQuote(res.data[7].text);
        setAuthor(res.data[7].author);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
    console.log(props);
  }, []);

  return (
    <div className="welcome-page">
      <h1>
       Dobro došao <span>{student.name}</span>{" "}
      </h1>
      {loading ? (
        "Loading...."
      ) : (
        <div>
          <h2>{quote}</h2>
          <p>by {author}</p>
        </div>
      )}
    </div>
  );
}

export default WelcomePage;
