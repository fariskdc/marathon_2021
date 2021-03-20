const express = require("express");
const router = express.Router();
const Index = require("../models/Index");

router.get("/", (req, res) => {
  Index.find()
    .then((index) => res.json(index))
    .catch((err) => res.json({ message: err }));
});

router.post("/", (req, res) => {
  const index = new Index({
    number: req.body.number,
    grades: [],
  });

  index
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
