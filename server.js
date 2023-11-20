const express = require("express");
const { stat } = require("fs");
const app = express();
const path = require("path");
app.use(express.json());
const hbs = require("express-handlebars");


// serving static files
app.use(express.static(path.join(__dirname, "public")));
// mongodb database
require("./server/database/database.js")();

//set view engine
app.set("view engine", "hbs");
app.engine("hbs", hbs.engine({
    extname: "hbs",
    defaultView: "default",
    layoutsDir: path.join(__dirname, "views"),
    partialsDir: path.join(__dirname, "views/partials"),
}))




// calling routing
app.use("/", require("./server/router/router"));

app.listen(3000, () => {
    console.log("Server started on port 3000");
});