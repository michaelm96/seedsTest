const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
const routes = require('../src/routes/routes')
const PORT = 3000

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", routes)

// if need to test api locally un-comment lines below

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

module.exports = app