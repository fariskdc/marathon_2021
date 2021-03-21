import React, { useContext, useState } from "react";
import axios from "axios";
import HomeStudents from "./HomeStudents";
import HomePageStudent from "./HomePageStudent";

function LoginForm() {
  const [isLogged, setIsLogged] = useState(false);
  const [student, setStudent] = useState({
    id: "",
    name: "",
    surname: "",
    semester: 0,
    email: "",
    phone: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    message: "",
    value: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      url: "http://localhost:3001/students",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const students = res.data;
        const length = students.length;
        for (let i = 0; i < length; i++) {
          if (students[i].email == email) {
            setError({ message: "", value: false });
            if (students[i].password == password) {
              setError({ message: "", value: false });
              const stud = students[i];
              setStudent({
                id: stud.id,
                name: stud.name,
                surname: stud.surname,
                semester: stud.semester,
                email: stud.email,
                phone: stud.phone,
              });
              setIsLoggedIn(true);
              break;
            } else setError({ message: "Wrong Pass", value: true });
            break;
          } else setError({ message: "Not Registered", value: true });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        {error.value ? error.message : null}
      </form>
    </div>
  );
}

export default LoginForm;
