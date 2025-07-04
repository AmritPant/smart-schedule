const express = require("express");
const emptyBodyChecker = require("../utils/checkEmptyBody");
const Teacher = require("../models/teacherModel");

const Router = express.Router();

// Get Request Handle
Router.get("/", async (req, res) => {
  console.log("Inside Teacher ROuter");
  try {
    const teacherData = await Teacher.find();
    res.status(200).json(teacherData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST Request Handler
Router.post("/", async (req, res) => {
  try {
    const teacherData = await Teacher.create(req.body);
    res.status(200).json(teacherData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = Router;
