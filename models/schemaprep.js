import mongoose from "mongoose";
export default class SchemaGeneric {
     constructor(schema){
         this.prdSchema = new mongoose.Schema(schema);
     }

     mgseModel(modelName){
         return mongoose.model(modelName, this.prdSchema);
     }
     findDatawithref(exp = {}, populateArr = []){
        return this.find(exp).populate([{path:'generalspecs'},{path:'reviews'}]).exec();
      }
}
