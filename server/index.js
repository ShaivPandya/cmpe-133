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

// check if valid sign in
app.put("/signIn", (req, res) => {
  console.log(req.body);
  const q = "SELECT * FROM Users WHERE email=? AND password=?;";
  const values = [
    req.body.email,
    req.body.password
  ]
  
  db.query(q, values, (err, data) => {
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

// view submitted applications
app.get("/submittedApplications", (req, res) => {
  const q = "SELECT * FROM JobApplications WHERE email=?;";
  const email = req.body.email;
  db.query(q, email, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
})

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

// view a specific job
app.get("/jobs/:id", (req, res) => {
  const jobId = req.params.id;
  const q = "SELECT * FROM Jobs WHERE idJobs = ? ";
  db.query(q, [jobId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
})

// view account
app.get("/users/:id", (req, res) => {
  const email = req.params.id;
  const q = "SELECT * FROM Users WHERE email = ?";
  db.query(q, [email], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
})

// create job
app.post("/createJob", (req, res) => {
  const q = "INSERT INTO Jobs (business, jobTitle, location, description) VALUES (?)";

  const values = [
    req.body.business,
    req.body.jobTitle,
    req.body.location,
    req.body.description
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
})

// Edit job posting
app.put("/jobs/:id", (req, res) => {
  const jobId = req.params.id;
  const q = "UPDATE Jobs SET `jobTitle`= ?, `location`= ?, `description`= ? WHERE idJobs = ?";

  const values = [
    req.body.jobTitle,
    req.body.location,
    req.body.description,
  ];

  db.query(q, [...values,jobId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// view created job postings
app.get("/createdJobs", (req, res) => {
  const q = "SELECT * FROM Jobs WHERE business = ?;"
  const email = req.body.business;
  db.query(q, email, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
})

// view all applications for a specific role
app.get("/viewApplications/:id", (req, res) => {
  const jobId = req.params.id;
  const q = "SELECT * FROM JobApplications WHERE idJobs = ?;";
  db.query(q, [jobId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
})

// view a specific application
app.get("/viewApplication/:id", (req, res) => {
  const applicationId = req.params.id;
  const q = "SELECT * FROM JobApplications WHERE idApplication = ?;";
  db.query(q, [applicationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
})

app.listen(8800, () => {
    console.log("Connected to backend.");
});