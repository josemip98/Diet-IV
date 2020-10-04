var express = require("express");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
  res.send("Bienvenido a Organize your diet");
});

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
