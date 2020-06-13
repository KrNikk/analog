const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const analogspaceRoutes = require("./routes/analogspace.routes");

app.use(express.json());

/* const allowedOrigins = 'http://localhost:3000/';

app.use(cors({
  origin: function(origin, callback){
    if(!origin){
      return callback (null, true);
    }
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
})); */


const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/analogspace", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connect();


app.use("/times", analogspaceRoutes);


app.listen(5000, () => console.log("app is running on port 5000"));
