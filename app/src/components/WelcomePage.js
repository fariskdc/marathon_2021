import React, { useEffect, useState } from "react";
import axios from "axios";

function WelcomePage(props) {
  const { user } = props;
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  const quoteNum = Math.floor(Math.random() * (100 - 0) + 0);

  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => {
        setLoading(false);
        setQuote(res.data[quoteNum].text);
        setAuthor(res.data[quoteNum].author);
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
        Dobro došao <span>{user.name}</span>{" "}
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
