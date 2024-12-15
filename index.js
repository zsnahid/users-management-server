const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const users = [
  { id: 1, name: "Raihan", email: "raihan@gmail.com" },
  { id: 2, name: "Asif", email: "asif@gmail.com" },
  { id: 3, name: "Raju", email: "raju@gmail.com" },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Users Management");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hit");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
