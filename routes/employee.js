let express = require("express");
const Employee = require("../model/employee");
let router = express.Router();

/* create Employee listing. */
router.get("/addname", (req, res) => {
  let data = new Employee({
    name: req.query.name,
  });
  data
    .save()
    .then((item) => {
      res.json(item);
      console.log(item);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});
module.exports = router;
