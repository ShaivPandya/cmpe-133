import express, { application } from "express";
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

// check if valid sign in
app.put("/businessSignIn", (req, res) => {
  const q = "SELECT * FROM Businesses WHERE name=? AND password=?;";
  const values = [
    req.body.name,
    req.body.password
  ]
  
  db.query(q, values, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  })
})

// signup (works with Insomnia)
app.post("/signUp", (req, res) => {
  const q = "INSERT INTO Users(`email`, `name`, `password`, `phone`, `dob`) VALUES (?)";

  const values = [
    req.body.email,
    req.body.name,
    req.body.password,
    req.body.phone,
    req.body.dob
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// view submitted applications
app.put("/submittedApplications", (req, res) => {
  const q = "SELECT * FROM JobApplications NATURAL JOIN Jobs WHERE email=?";
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
  const q = "INSERT INTO Jobs (business, jobTitle, location, description, positions) VALUES (?)";

  const values = [
    req.body.business,
    req.body.jobTitle,
    req.body.location,
    req.body.description,
    req.body.positions
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    console.log(data);
    return res.json(data);
  });
})

// Edit job posting
app.put("/updateJob/:id", (req, res) => {
  const jobId = req.params.id;
  const q = "UPDATE Jobs SET `jobTitle`= ?, `location`= ?, `description`= ?, `positions`=? WHERE idJobs = ?";

  const values = [
    req.body.jobTitle,
    req.body.location,
    req.body.description,
    req.body.positions
  ];

  db.query(q, [...values,jobId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// delete job applications
app.delete("/jobApps/:id", (req, res) => {
  const idJobs = req.params.id;
  const q = "DELETE FROM JobApplications WHERE idJobs = ?";
  console.log(idJobs);
  db.query(q, [idJobs], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// delete from jobs
app.delete("/jobs/:id", (req, res) => {
  const idJobs = req.params.id;
  const q = "DELETE FROM Jobs WHERE idJobs = ?;"
  db.query(q, [idJobs], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// view created job postings
app.put("/createdJobs", (req, res) => {
  const q = "SELECT * FROM Jobs WHERE business = ?;"
  const name = req.body.business;
  db.query(q, [name], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
})

// delete account
app.delete("/users/:id", (req, res) => {
  const email = req.params.id;
  const q = " DELETE FROM Users WHERE email = ? ";

  db.query(q, [email], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// apply to a job
app.post("/apply", (req, res) => {
  const q = "INSERT INTO JobApplications (idJobs, email, Name, DOB, phone) VALUES (?)";

  const values = [
    req.body.idJobs,
    req.body.email,
    req.body.Name,
    req.body.DOB,
    req.body.phone
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    console.log(data);
    return res.json(data);
  });
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

// get an application by someone for a specific role
app.put("/checkapplication", (req, res) => {
  const values = [
    req.body.idJobs,
    req.body.email
  ]
  const q = "SELECT * FROM JobApplications WHERE idJobs = ? AND email = ?;";
  db.query(q, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
})

// get an application by someone for a specific role
app.put("/updateApplication", (req, res) => {
  const values = [
    req.body.status,
    req.body.idApplication
  ]
  const q = "UPDATE JobApplications SET `status` = ? WHERE `idApplication` = ?;";
  db.query(q, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
})

// accept a job offer
app.put("/acceptOffer/:id", (req, res) => {
  const applicationId = req.params.id;
  const q = "UPDATE JobApplications SET `status` = 'Accepted' WHERE `idApplication` = ?;";
  db.query(q, [applicationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
})

// decrease the number of positions available for a position
app.put("/decreaseCount/:id", (req, res) => {
  const applicationId = req.params.id;
  const q = "UPDATE Jobs SET `positions` = (SELECT positions) - 1 WHERE idJobs = ?;"
  db.query(q, [applicationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
})

// view a specific application
app.get("/viewApplication/:id", (req, res) => {
  const applicationId = req.params.id;
  const q = "SELECT * FROM JobApplications NATURAL JOIN Jobs WHERE idApplication = ?;";
  db.query(q, [applicationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  })
})

app.listen(8800, () => {
    console.log("Connected to backend.");
});