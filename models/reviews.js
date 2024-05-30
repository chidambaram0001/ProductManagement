const mongoose = require("mongoose");
const reviews =  new mongoose.Schema(
    {   _id: mongoose.Types.ObjectId,
        username: { type: String},
        comments: {type: String},
        likes : { type: Number, default: 0},
        reply : { type: Array}
        
       
},
{
    collection : 'reviews' 
});




module.exports = mongoose.model('reviews',reviews);
