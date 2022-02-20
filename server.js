const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
});

const port = 3000
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})