const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const analogspaceRoutes = require("./routes/analogspace.routes");
const path = require('path');

app.use(express.json());

const connect = () => {
  return mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/analogspace", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connect();


app.use("/times", analogspaceRoutes);

if(process.env.NODE_EVN === "production") {
  app.use(express.static('analog/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'analog', 'build', 'index.html'));
  })
}

app.listen(process.env.PORT || 5000, () => console.log("app is running on port 5000"));