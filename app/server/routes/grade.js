const express = require("express");
const Grade = require("../models/Grade");
const router = express.Router();

router.get("/", (req, res) => {
  Grade.find()
    .then((grades) => res.json(grades))
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
  const grade = new Grade({
    name: req.body.name,
    grade: req.body.grade,
  });

  grade
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
