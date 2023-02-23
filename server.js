const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

var bodyParser = require('body-parser')


connectDb();
app.use(express.json());


app.use("/api/forums",require("./routes/forumRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log("Server is running on port " + port);
});


