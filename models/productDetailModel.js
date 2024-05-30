const mongoose = require("mongoose");
const prdDetailsSchema = mongoose.Schema({
   type: String,
   productDetails:{ 
       category : String, 
       isRefurbshised : String, 
       isDemoUnit : String,
       price : Number, 
       condition : String,
       conditionDetails : Array,
       batteryhealth : String, 
       color : String, 
       imgmain: Array, 
       imgthunmbnail : Array, 
       ratings : Number, 
       offers : Array, 
       Emioption : Array,
        qty : Number 
    }
   
});

module.exports = mongoose.model('productdetailsmodels',prdDetailsSchema);
