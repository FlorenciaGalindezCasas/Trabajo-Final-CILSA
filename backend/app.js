const express = require("express");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();

const taskRoute = require("./routes/task.router.js");
const tagRoute = require("./routes/tag.router.js");
const authRoute = require("./routes/auth.router.js");

const app = express();

const port = 4000;

app.use(cors());
app.use(
  session({
    secret: "florencia40029082",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "http://localhost:5173",
    "http://localhost:5174"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/auth", authRoute);
app.use("/task", taskRoute);
app.use("/tag", tagRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
