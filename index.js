const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("mongoose");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
app.use(require("./routes/routes"));

db.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@db.zrgix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
)
  .then(() => {
    console.log("connected...");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running... ${PORT}`);
});
