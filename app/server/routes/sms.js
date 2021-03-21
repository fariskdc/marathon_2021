const Nexmo = require("nexmo");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const nexmo = new Nexmo({
    apiKey: "96f1cab9",
    apiSecret: "K8XIZGrywOAo85xp",
  });

  const from = `${req.body.from}`;
  const to = "387644020191";
  const text = `${req.body.name}, Ocjena: ${req.body.grade}`;

  nexmo.message.sendSms(from, to, text);
});
