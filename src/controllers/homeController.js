const connection = require("../config/dataBase.js");
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require("../services/CRUDServer.js");
// Get home page
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
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
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.Myname;
    let city = req.body.Mycity;
    let [result, feilds] = await connection.query(
        `insert into Users (email, name, city) values (?, ?, ?)`,
        [email, name, city]
    );
    res.send("Create user successfully");
};
// Update
const getUpdatePage =  async(req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render("update.ejs",{userEdit: user});
};
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.Myname;
    let city = req.body.Mycity;
    let userId = req.body.userId;
    await updateUserById(email, city, name, userId);
    res.redirect("/home");
};
// Delete
const postDeleteUser = async(req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render("delete.ejs",{userEdit: user});
}
const postHandlerRemoverUser = async(req, res) => {
    const id = req.body.userId;
    await deleteUserById(id)
    res.redirect("/home");
}



module.exports = {
    getHomepage,
    getAbout,
    postCreateUser,
    getCreatePage, getUpdatePage,postUpdateUser,
    postDeleteUser,postHandlerRemoverUser
};
