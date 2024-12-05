const express = require("express");
const path = require("path");
const { handleConnectMongoDB } = require("./connection");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");

const app = express();
const PORT = 8000;

handleConnectMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongo DB Connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => {
  console.log("Server Started at :- ", PORT);
});
