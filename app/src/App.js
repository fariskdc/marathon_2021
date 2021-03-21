import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import HomeStudents from "./components/HomeStudents";

function App() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    surname: "",
    semester: 0,
    email: "",
    phone: "",
  });

  const [isLogged, setIsLogged] = useState(false);
  const handleState = () => {
    setIsLogged(true);
  };
  return (
    <div>
      {isLogged ? <HomeStudents /> : <LoginForm loginAction={handleState} />}
    </div>
  );
}

export default App;
