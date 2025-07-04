const express = require("express");
const subjectRouter = require("./routes/subjectRouter");

const app = express();

// Body Parser
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/subject", subjectRouter); // Mounting Router

module.exports = app;
