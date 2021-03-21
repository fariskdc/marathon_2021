const express = require("express");
const Subject = require("../models/Subject");
const router = express.Router();

router.get("/", (req, res) => {
  Subject.find()
    .then((subjects) => res.json(subjects))
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
  const subject = new Subject({
    name: req.body.name,
    professor: req.body.professor,
  });

  subject
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
