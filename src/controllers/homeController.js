const connection = require("../config/dataBase.js");
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require("../services/CRUDServer.js");
// Get home page
const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render("home.ejs", { listUsers: results });
};
// Get about page
const getAbout = (req, res) => {
    res.render("sample.ejs");
};
// Create
const getCreatePage = (req, res) => {
    res.render("create.ejs");
};
const User = require("../models/user.js");
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.Myname;
    let city = req.body.Mycity;
    await User.create({ email: email, name: name, city: city});
    res.send("Create user successfully");
};
// Update
const getUpdatePage =  async(req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render("update.ejs",{userEdit: user});
};
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.Myname;
    let city = req.body.Mycity;
    let userId = req.body.userId;
    await User.updateOne({_id:userId},{email:email, name:name, city:city});
    res.redirect("/home");
};
// Delete
const postDeleteUser = async(req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render("delete.ejs",{userEdit: user});
}
const postHandlerRemoverUser = async(req, res) => {
    const userId = req.body.userId;
    await User.deleteOne({_id:userId});
    res.redirect("/home");
}



module.exports = {
    getHomepage,
    getAbout,
    postCreateUser,
    getCreatePage, getUpdatePage,postUpdateUser,
    postDeleteUser,postHandlerRemoverUser
};
