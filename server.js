const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

let  items = [];
let  workItems = [];

app.get('/', (req, res) => {


  let today = new Date();

  let options  = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("kr-KR", options);

  res.render('index', {listTitle: day, newListItem: items});
});


app.post("/", (req, res) => {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work")
  } else {
    items.push(item);
    res.redirect("/");
  }


})

app.get("/work", (req,res) => {
  res.render("index", {listTitle: "Work", newListItem: workItems})
})








const port = 3000
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
