import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import HomePageStudents from "./components/HomePageStudent";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [student, setStudent] = useState({
    id: "",
    name: "",
    surname: "",
    semester: 0,
    email: "",
    phone: "",
  });

  const handleLogin = (payload) => {
    setStudent(payload);
    setIsLogged(true);
  };

  return (
    <div>
      {isLogged ? (
        <HomePageStudents student={student} />
      ) : (
        <LoginForm action={handleLogin} />
      )}
    </div>
  );
}

export default App;
