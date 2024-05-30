const mongoose = require("mongoose");
const prdSchema =  new mongoose.Schema({
    _id:  mongoose.Types.ObjectId,
    product_id:{
      type: String,
      required: true
    },
    product : {
        type: String,
        default: '',
        required: true,
      },
    title : {
        type: String,
        default: '',
        required: true,
      },
    brand : {
        type: String,
        default: '',
        required: true,
      },
   
    updatedby: {
        type: Number,
        default: 0,
        required: true,
      },
      generalspecs:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'generalspecs'
      },
     
    reviews:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'reviews'
    }],

    varient: Array
},
{ 
  collection : 'productlist' 

});





prdSchema.statics.findData =  function(){
  return new Promise((resolve, reject)=>{
    this.find().populate([{path:'generalspecs'},{path:'reviews'}])
    .exec().then(data => {
      resolve(data)
    })
  })
}
prdSchema.statics.findDatawithref =  function(exp = {}){
 
    return this.find(exp).populate([{path:'generalspecs'},{path:'reviews'}]).exec();
}
// prdSchema.statics.productIsExists = function(prodId){
//   this.find({product_id:prodId}).exec().then(data => {
//     if(data.length){
//       return true
//     }
//     return false;
//   })
// }

prdSchema.methods.updateRef =  function(data){
  if(data && data._id && data.generalspecs._id){
    this.generalspecs = data.generalspecs._id;
    this.reviews = data.reviews.map(id => id._id);
    return true
  }
  
  return false;


}


module.exports = mongoose.model('productlist', prdSchema);

