const mongoose = require('mongoose');
// Shape data
const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    address: String,
    phone :String,
    email:String,
    image:String,
    description: String,
   
}, {timestamps: true});

// Collection data
const Customer = mongoose.model('Customer',customerSchema);
// Export
module.exports = Customer;