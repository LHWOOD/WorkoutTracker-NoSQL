const express = require("express");
const { db } = require("../models/workout");
const router = express.Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  db.find()
    .then((dbData) => {
      res.json(dbdata);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.find()
    .then((dbdata) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.findByIdAndUpdate(params.id, { $push: { exercise: body } })
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
