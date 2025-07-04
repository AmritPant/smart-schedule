const mongoose = require("mongoose");

// For topic Schema
const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Provide the Name of the Topic"],
    minLength: [5, "A topic can't be less than 5 letters"],
    maxLength: [30, "A topic can't be more than 30 letters"],
    unqiue: [true, "A topic must be unqiue"],
  },
  weightage: {
    type: Number,
    require: [true, "Please Provide the Weightage of the Topic"],
    min: [0, "A weightage of the topic can't be less than 0"],
    max: [100, "A weightage of the topic can't be more than 100"],
  },
});

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please Provide Name/Tittle of the Subject"],
      minLength: [3, "A Subject Name can't be less then 3 letters"],
      maxLength: [15, "A subject Name can't be more then 15 letters"],
      unqiue: true,
    },
    weightage: {
      type: Number,
      require: [true, "Please Provide the Weightage of the Subject"],
      min: [0, "A weightage can't be less than 0 "],
      max: [100, "A weightage can't be more than 100"],
    },
    topic: {
      type: [topicSchema],
      required: [true, "Please Provide the topic of the subject"],
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: "Topic Length Can't be less than 0",
      },
    },
  },
  { strict: "throw" }
);

const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject;
