import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cmpe133",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/jobs", (req, res) => {
  const q = "SELECT * FROM Jobs";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.listen(8800, () => {
    console.log("Connected to backend.");
});