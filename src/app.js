const express = require("express");
const path = require("path");
const hbs = require("hbs");
const employeeRoute = require("../routes/employee");

const app = express();

//setup path provider
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//static web page
app.use(express.static(publicDirectoryPath));

//setup handlebars
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//db connection
require("./db/conn");

//route middleware
app.use(express.json()); //bodyParser
app.use("/employee", employeeRoute);

app.get("/", (req, res) => {
  // res.send(`GIRISH BABU AAB AAP MAIN ROUTE KE send  ME HAI `);
  // res.render("index");

  res.render("index");
});

app.listen(3000, () => {
  console.log("hello server is running on 3000");
});
