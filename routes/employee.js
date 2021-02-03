let express = require("express");
const Employee = require("../model/employee");
let router = express.Router();

/* create Employee listing. */
router.post("/addname", (req, res) => {
  let data = new Employee(req.body);
  data
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});
module.exports = router;
