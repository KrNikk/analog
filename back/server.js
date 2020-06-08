const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const analogspaceRoutes = require("./routes/analogspace.routes");


const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/analogspace", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connect();

app.use(express.json());
app.use(cors());
app.use("/times", analogspaceRoutes);


app.listen(5000, () => console.log("app is running on port 5000"));
