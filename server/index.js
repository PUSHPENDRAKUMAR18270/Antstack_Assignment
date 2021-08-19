const express = require("express");
const path = require('path');
var bodyParser = require('body-parser')
const cors = require("cors")
const PORT = process.env.PORT || 5000;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// create application/json parser
var jsonParser = bodyParser.json()

app.use(cors())
app.use(jsonParser)

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post('/api/apply-coupon',(req,res)=>{

  console.log(req.body)
  //const couponCode = req.body['couponCode']
  // const totalAmount = req.body['totalAmount']
  //console.log("couponCode",couponCode)
  // console.log("totalAmount",totalAmount)
  res.json({'cost':1000});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});