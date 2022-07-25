const express = require("express");
const cors = require("cors");

const routes = require("./Routes/Admin/shopRegistration/shopRegistration.routes");
const offroutes =require("./Routes/Admin/offer/offer.routes");
const pcgtroutes =require("./Routes/Admin/productCategory/productCategory.routes");
const psubcgtroutes =require("./Routes/Admin/productSubCategory/productSubcategory.routes");
const whisroutes =require('./Routes/Customer/addtoWhislist/addtoWhislist.routes')
const cartroutes =require('./Routes/Customer/cart/cart.routes')
const cusregroutes =require('./Routes/Customer/customerRegistration/customerRegistration.routes')
const payroutes =require('./Routes/Customer/makePayment/makePayment.routes')
const reviewroutes =require('./Routes/Customer/review/review.routes');
const shiproutes = require("./Routes/Shipping/shipping.routes");
const proinroutes = require("./Routes/Shop/productInventory/productInventory.routes");
const prospecifyroutes =require("./Routes/Shop/productSpecification/productSpecification.routes");
const userroutes=require("./Routes/user/user.routes");
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello Api working");
});
     //shop registration
app.use('/admin', routes);

      //offer
app.use('/admin', offroutes);
     
//productcategory
app.use('/admin',pcgtroutes);

//productsubcategory
app.use('/admin',psubcgtroutes);


//addtowhislist
app.use('/customer',whisroutes);
 
//adtocart
app.use('/customer',cartroutes);

//customerregistration
app.use('/customer',cusregroutes);

//makepayment
app.use('/customer',payroutes);

//review
app.use('/customer',reviewroutes);

//shipping
app.use('/shipping',shiproutes);

//shop //productinventory
app.use('/shop',proinroutes);

//productspecification
app.use('/shop',prospecifyroutes);

//user
app.use('/user',userroutes);

app.listen(port, () => {
  console.log(`server started = http://localhost:${port}`);
});
