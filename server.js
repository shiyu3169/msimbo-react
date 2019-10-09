const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// Init Middle ware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/assignments", require("./routes/assignments"));
app.use("/api/grades", require("./routes/grades"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/wikis", require("./routes/wikis"));
app.use("/api/videos", require("./routes/videos"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
