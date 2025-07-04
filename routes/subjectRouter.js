const express = require("express");
const Subject = require("../models/subjectModel");
const emptyBodyChecker = require("../utils/checkEmptyBody");

const Router = express.Router();

Router.post("/", emptyBodyChecker, async (req, res) => {
  try {
    const subjecData = await Subject.create(req.body);
    res.status(200).json(subjecData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.get("/", async (req, res) => {
  try {
    const getSubjectData = await Subject.find();
    res.status(200).json(getSubjectData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = Router;
