
const express = require("express");
const path = require("path");
const members = require("./Members");
const logger = require('./middleware/logger.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!!!</h1>");
});
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
