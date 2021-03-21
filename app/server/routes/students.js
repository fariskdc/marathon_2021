const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.get("/", (req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.json({ message: err }));
});

router.get("/:id", (req, res) => {
  Student.find()
    .then((students) => {
      const lenght = students.length;
      const id = req.params.id;
      for (let i = 0; i < lenght; i++)
        if (id == students[i].id) res.json(students[i]);
    })
    .catch((err) => res.json(err));
});

router.post("/", (req, res) => {
  const student = new Student({
    id: req.body.id,
    status: req.body.status,
    name: req.body.name,
    surname: req.body.surname,
    semester: req.body.semester,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  });

  student
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
