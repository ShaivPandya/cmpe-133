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

// TODO: check if valid sign in
app.get("/signIn", (req, res) => {
  const q = "SELECT * FROM Users WHERE email='johndoe@gmail.com' AND password='password123';";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    // figure out a way to like deny entry based on result
    // prolly more of a frontend thing
    return res.json(data);
  })
})

// signup (works with Insomnia)
app.post("/signUp", (req, res) => {
  const q = "INSERT INTO Users(`email`, `name`, `password`) VALUES (?)";

  const values = [
    req.body.email,
    req.body.name,
    req.body.password
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// get all jobs
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



// create job
app.post("/createJob", (req, res) => {

})

app.listen(8800, () => {
    console.log("Connected to backend.");
});