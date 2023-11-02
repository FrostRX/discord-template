const express = require("express");
const cors = require("cors");
const { api } = require("../functions/console");

const app = express();

// Cors
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");

// Routes

// Listen

app.listen(3000, () => {
  api("The server is running on port 3000");
});
