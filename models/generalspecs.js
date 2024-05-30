const mongoose = require("mongoose");
const generalspecs =  new mongoose.Schema(
    {   _id: mongoose.Types.ObjectId,
        name: { type: String, required: true },
        camera:{ type: Object},
        disply:{type: Object}, 
        general:{type: Object},
        hardwareCamera:{type: Object}

       
},
{
    collection : 'generalspecs' 
});




//const generalspecs = mongoose.model('generalspecs',generalspecs);
module.exports = mongoose.model('generalspecs',generalspecs);


