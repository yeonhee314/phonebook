import express from "express";

const cors = require("cors");
const app = express();

app.use(cors());

// test
const contact = require("./router/contact");
app.use("/api", contact);

const port: number = 5000;
app.listen(port, () => console.log(`port : ${port}`));
