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

Router.patch("/:id", async (req, res) => {
  console.log("inside Patch Function");
  try {
    const newData = await Subject.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    console.log(req.params.id);
    console.log(newData);
    res.status(200).json(newData);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
});

Router.delete("/:id", async (req, res) => {
  console.log("inside Delete Function");
  try {
    const newData = await Subject.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.status(200).json(newData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = Router;
