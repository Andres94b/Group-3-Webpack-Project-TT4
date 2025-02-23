
const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

app.use(express.json());


app.get("/", (req,res) => {
    res.status(200).json({message: "API is running"});
})

app.listen(port, () => {
    console.log(`The server is running, PORT: ${port}`);
})