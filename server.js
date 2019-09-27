const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("cookie-session");
const passport = require("passport");
const connectDB = require("./config/db");
const app = express();

app.use(cookieParser());

if (process.env.SESSION_SECRET) {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true
    })
  );
} else {
  app.use(
    session({
      secret: "test",
      resave: true,
      saveUninitialized: true
    })
  );
}

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, "build")));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port = process.env.PORT || "3100";
app.set("port", port);

require("./server/app")(app);
connectDB();

// For Build: Catch all other routes and return the index file -- BUILDING
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3100;

// server.listen(port);
app.listen(PORT, function() {
  console.log("Running on " + app.get("port"));
});
