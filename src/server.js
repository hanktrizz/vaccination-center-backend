require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const cors = require("cors");
const express = require("express");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers complain about the default 204 code
  }),
);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "API is alive!",
  });
});
