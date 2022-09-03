const express = require("express");
const cors = require('cors');
const dbConnect = require("./Utils/dbConnect");
const userRoute = require("./Routes/v1/user.route.js")
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
// connect to db
dbConnect();
app.use("/api/v1/users", userRoute);

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.all("*" , (req,res) => {
    res.send("No route found")
})

app.listen(PORT, () => {
    console.log("Server running");
})
