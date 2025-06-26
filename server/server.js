const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const runRoute = require("./routes/runRoute");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/run',runRoute);

app.listen(PORT,() => {
    console.log("The server is running at port",PORT);
})