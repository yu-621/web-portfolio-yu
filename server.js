const express = require("express");
const createError = require("http-errors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use((req, res, next) => {
  next(createError(404));
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(`${err.message}`);
  if (err.status !== 404) console.error(err);
});

app.listen(port, () => {
  console.log(`Server started on Port=${port}.`);
});
