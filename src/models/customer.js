const mongoose = require('mongoose');
const mongoose_delete = require("mongoose-delete");
// Shape data
const customerSchema = new mongoose.Schema(
    {
    name:{
        type: String,
        required: true,
    },
    address: String,
    phone :String,
    email:String,
    image:String,
    description: String,
   
    }, 
    {
    timestamps: true, //createdAt and updatedAt
    // statics: {
    //     findByHoiDanIt(name) {
    //         return this.find({name: new RegExp(name,"i")});
    //     },
    //     findByEric(name) {
    //         return this.find({name: new RegExp(name,"i")});
    //     }
    // }

    });
// Config soft delete
customerSchema.plugin(mongoose_delete, {overrideMethods: 'all',}); // Get data without "deleted" fields are "false"





// Collection data
const Customer = mongoose.model('Customer',customerSchema);
// Export
module.exports = Customer;