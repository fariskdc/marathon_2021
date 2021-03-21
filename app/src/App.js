import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import HomePageProfessor from "./components/HomePageProfessor";
import HomePageStudents from "./components/HomePageStudent";
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isProf, setIsProf] = useState(false);
  const [professor, setProfessor] = useState({
    name: "",
    surname: "",
    email: "",
    subjects: [],
  });
  const [student, setStudent] = useState({
    id: "",
    name: "",
    surname: "",
    semester: 0,
    email: "",
    phone: "",
  });

  const handleLogin = (payload) => {
    if (payload.status == "Student") {
      setStudent(payload);
    } else {
      setIsProf(true);
      setProfessor(payload);
    }
    setIsLogged(true);
  };

  return (
    <div>
      {isLogged ? (
        isProf ? (
          <HomePageProfessor professor={professor} />
        ) : (
          <HomePageStudents student={student} />
        )
      ) : (
        <LoginForm action={handleLogin} />
      )}
    </div>
  );
}

export default App;
