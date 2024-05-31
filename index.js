const express = require("express");
const Connection = require("./Connection.js");
const cors = require("cors");
const router = require("./Route/route.js");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  cors({
    exposedHeaders: ["Authorization"],
  })
);

app.use("/api", router);

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
