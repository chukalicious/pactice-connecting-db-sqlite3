// here we are both importing express and its Router method
const router = require("express").Router();
const db = require("./user-model");

router.get("/", (req, res) => {
  db.find()
    .then((user) => {
      const { username, id, role } = user;
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "could not find users" });
    });
});

module.exports = router;
