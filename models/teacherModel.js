const mongoose = require("mongoose");

const teacherTopicSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Topic Name Must be present"],
    minLength: [5, "Topic should be of minimum of 5 length"],
    maxLength: [30, "Topic must be less than 30 letters"],
  },
});

const teacherSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter the name of the teacher"],
      minLength: [3, "firstName cannot be less than 3 letters"],
      maxLength: [15, "firstName cannot be greater than 15 letters"],
    },
    middleName: {
      type: String,
      required: false,
      minLength: [3, "firstName cannot be less than 3 letters"],
      maxLength: [10, "firstName cannot be greater than 10 letters"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter the name of the teacher"],
      minLength: [3, "firstName cannot be less than 3 letters"],
      maxLength: [10, "firstName cannot be greater than 10 letters"],
    },
    salutation: {
      type: String,
      requird: [true, "A salutation must be present"],
      enum: {
        values: ["Mr.", "Mrs.", "Dr.", "Asso Prof Dr.", "Prof.", "Prof Dr."],
        message:
          "Values must be type of: Mr. Mrs. Dr. Asso Prof Dr., Prof., Prof Dr.",
      },
    },
    teacherCode: {
      type: String,
      minLength: [2, "The teacher code can't be less than 2 letters"],
      maxLength: [4, "The teacher code can't be more than 4 letters"],
      required: [true, "The teacher code must be present"],
    },
    availableDays: {
      type: [String],
      requird: [true, "A available days must be present"],
      enum: {
        values: [
          "everyday",
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thusday",
          "friday",
        ],
        message:
          "Values must be type of:  everyday,sunday,monday,tuesday,wednesday,thusday,friday,saturday",
      },
    },
    availablePeriods: {
      type: [String],
      required: [true, "The avilable preiods can't be empty"],
      enum: {
        values: [
          "mp1",
          "mp2",
          "mp3",
          "mp4",
          "ap1",
          "ap2",
          "ap3",
          "ap4",
          "ep1",
          "ep2",
          "ep3",
          "ep4",
          "np1",
          "np2",
          "np3",
          "np4",
        ],
        message:
          "values must be type of: mp1.. mp4 ap1..ap4 , ep1...ep4, np1...np4",
      },
    },
    topic: {
      type: [teacherTopicSchema],
      required: [true, "Please Provide the topic of the teacher"],
      validate: {
        validator: function (v) {
          v && v.length > 0;
        },
        message: "Topic for a teacher must be present",
      },
    },
  },
  { strict: "throw" }
);

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
