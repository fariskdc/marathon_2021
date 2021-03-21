import React, { useState } from "react";
import axios from "axios";

function LoginForm(props) {
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
          if (students[i].email === email) {
            setError({ message: "", value: false });
            if (students[i].password === password) {
              setError({ message: "", value: false });
              const stud = students[i];
              props.action({
                id: stud.id,
                status: stud.status,
                name: stud.name,
                surname: stud.surname,
                semester: stud.semester,
                email: stud.email,
                phone: stud.phone,
              });
              break;
            } else {
              setError({ message: "Wrong Pass", value: true });
              setTimeout(() => {
                setError({ message: "", value: false });
              }, 3000);
            }
            break;
          } else {
            axios({
              method: "GET",
              url: "http://localhost:3001/professors",
              headers: {
                "Content-Type": "application/json",
              },
            }).then((res) => {
              const professors = res.data;
              const lenght = professors.length;
              for (let i = 0; i < lenght; i++) {
                if (professors[i].email == email) {
                  setError({ message: "", value: false });
                  if (professors[i].password == password) {
                    setError({ message: "", value: false });
                    const prof = professors[i];
                    props.action({
                      name: prof.name,
                      surname: prof.surname,
                      status: prof.status,
                      email: prof.email,
                      subjects: prof.subjects,
                    });
                    break;
                  } else {
                    setError({ message: "Wrong Pass", value: true });
                    setTimeout(() => {
                      setError({ message: "", value: false });
                    }, 300);
                  }
                } else {
                  setError({ message: "Doesnt exist", value: true });
                  setTimeout(() => {
                    setError({ message: "", value: false });
                  }, 3000);
                }
              }
            });
          }
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
        {error.value ? <p>{error.message}</p> : null}
      </form>
    </div>
  );
}

export default LoginForm;
