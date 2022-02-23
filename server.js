const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

var  items = ["one", "two"];

app.get('/', (req, res) => {


  var today = new Date();

  var options  = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("kr-KR", options);

  res.render('index', {kindOfDay: day, newListItem: items});
});


app.post("/", (req, res) => {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");


})








const port = 3000
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})