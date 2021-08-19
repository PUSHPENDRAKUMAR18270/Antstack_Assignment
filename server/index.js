const express = require("express")
const path = require('path')
const cors = require("cors")
const DB = require("./DB/connection")
const ApplyCouponRouter = require('./Routes/ApplyCoupon')
const RetrieveCouponRouter = require('./Routes/RetrieveCoupons')
const AddCouponRouter = require('./Routes/AddCoupons')
const couponsDB = require("./DB/collections/couponsCollection")
const PORT = process.env.PORT || 5000


const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

DB.connection();
const CouponModel = couponsDB.getCouponsCollection()
module.exports.CouponModel = CouponModel;

//register routers
app.use('/api',ApplyCouponRouter)
app.use('/api',RetrieveCouponRouter)
app.use('/api',AddCouponRouter)

app.get("/api", (res) => {
    res.json({ message: "Hello from server!" });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});