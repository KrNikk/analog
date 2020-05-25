const express = require("express");
const mongoose = require("mongoose");
const app = express();
const analogspaceRoutes = require("./routes/analogspace.routes");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/analogspace", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connect();

app.use(express.json());
app.use("/times", analogspaceRoutes);
/* app.get("/", (req, res) => {
  res.send("hello world");
}); */

app.listen(5000, () => console.log("app is running on port 5000"));
