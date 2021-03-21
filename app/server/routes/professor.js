const express = require("express");
const router = express.Router();
const Professor = require("../models/Professor");

router.get("/", (req, res) => {
  Professor.find()
    .then((professor) => res.json(professor))
    .catch((err) => res.json({ message: err }));
});

// router.get("/:id", (req, res) => {
//   Student.find()
//     .then((students) => {
//       const lenght = students.length;
//       const id = req.params.id;
//       for (let i = 0; i < lenght; i++)
//         if (id == students[i].id) res.json(students[i]);
//     })
//     .catch((err) => res.json(err));
// });

router.post("/", (req, res) => {
  const professor = new Professor({
    name: req.body.name,
    surname: req.body.surname,
    status: req.body.status,
    email: req.body.email,
    password: req.body.password,
    subjects: req.body.subjects,
  });

  professor
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
