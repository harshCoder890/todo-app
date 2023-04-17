const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/to-do-routes");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`connected to Mongodb...`))
  .catch((err) => console.log(err));

app.use(routes);
app.listen(PORT, () => console.log(`listen in ${PORT} `));
