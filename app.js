const express = require("express");
const subjectRouter = require("./routes/subjectRouter");
const teacherRouter = require("./routes/teacherRouter");
const sectionRouter = require("./routes/sectionRoute");

const app = express();

// Body Parser
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/subject", subjectRouter); // Mounting Router
app.use("/api/v1/teacher", teacherRouter); //
app.use("/api/v1/section", sectionRouter);

module.exports = app;
