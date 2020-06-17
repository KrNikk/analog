const express = require("express");
const mongoose = require("mongoose");
const app = express();
const analogspaceRoutes = require("./routes/analogspace.routes");
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, "analog", "build")));
app.use(express.json());

const connect = () => {
  return mongoose.connect(process.env.MONGODB_URI  ||  "mongodb://localhost:27017/analogspace", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connect();


app.use("/times", analogspaceRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "analog", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("app is running on port 5000"));
