const express = require("express");
const generateTopicHour = require("../controller/generateTopicHour");
const Subject = require("../models/subjectModel");

const Router = express.Router();

Router.post("/", async (req, res) => {
  try {
    const data = generateTopicHour(
      req.body.startDate,
      req.body.endDate,
      Subject
    );
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = Router;
