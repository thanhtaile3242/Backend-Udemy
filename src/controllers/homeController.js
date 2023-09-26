const connection = require("../config/dataBase.js");
const { getAllUsers } = require("../services/CRUDServer.js");
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs", { listUsers: results });
};
// 
const getAbout = (req, res) => {
    res.render("sample.ejs");
};
// Create
const getCreatePage = (req, res) => {
    res.render("create.ejs");
};
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.Myname;
    let city = req.body.Mycity;
    let [result, feilds] = await connection.query(
        `insert into Users (email, name, city) values (?, ?, ?)`,
        [email, name, city]
    );
    console.log(result);
    res.send("Create user successfully");
};
// Update
const getUpdatePage = (req, res) => {
    const userId = req.params.id
    console.log(userId);
   res.render("update.ejs")
};


module.exports = {
    getHomepage,
    getAbout,
    postCreateUser,
    getCreatePage, getUpdatePage
};
