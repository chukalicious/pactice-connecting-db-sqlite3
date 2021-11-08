// here we are both importing express and its Router method
const router = require("express").Router();
const db = require("./user-model");

router.get("/", (req, res) => {
  db.find()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "could not find users" });
    });
});

router.post("/", (req, res) => {
  db.insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "unable to add user" });
    });
});

router.put("/:id", (req, res) => {
  db.update(req.params.id, req.body)
    .then((user) => {
      res.status(203).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json({ message: "unable to edit user" });
    });
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then((user) => {
      res.status(204).json({ message: "user deleted" });
    })
    .catch((err) => {
      res.status(404).json({ message: "could not delete user" });
    });
});

module.exports = router;
