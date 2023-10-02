const mongoose = require('mongoose');
// Shape data
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    city:String,
});

// Collection data
const User = mongoose.model('user',userSchema);

module.exports = User;