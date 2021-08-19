const express = require("express")
const path = require('path')
const cors = require("cors")
const DB = require("./DB/connection")
const couponsDB = require("./DB/collections/couponsCollection")
const PORT = process.env.PORT || 5000
const applyCoupon = require('./utils/applyCoupon')

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

DB.connection();
const CouponModel = couponsDB.getCouponsCollection()

app.get("/api", (res) => {
    res.json({ message: "Hello from server!" });
});

app.post('/api/apply-coupon',(req,res)=>{
  const couponCode = req.body['couponCode']
  const totalAmount = req.body['totalAmount']
  CouponModel.find({'couponCode':couponCode},(err,coupons)=>{
    if(err)
    {
      res.send('error occured please try again')
    }
    else{
      let result = applyCoupon(coupons,totalAmount);
      res.json(result)
    }
  })
});

app.post('/api/add-coupon',(req,res)=>{
  //coupon info
  let newCoupon = {
    'couponCode':req.body['couponCode'],
    'createdOn':new Date(),
    'minimumAmount':req.body['minimumAmount'],
    'expiryDate':req.body['expiryDate'],
    'couponType':req.body['couponType'],
    'discount':parseFloat(req.body['discount'])
  }
  //update if coupon already exists else add a new coupon
  CouponModel.updateOne({'couponCode': req.body['couponCode']},
  {
    $set: newCoupon
  }
  ,{upsert : true},(err)=>{
      if(err)
      {
        console.log(err);
        res.send(err);
      }
      else res.send("success")
    }
  );
});

app.post('api/retrieve-coupons',(req,res)=>{

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});