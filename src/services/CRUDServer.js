const connection = require("../config/dataBase");
// 
const getAllUsers = async () => {
    let [results, feilds] = await connection.query("select * from Users");
    return results;
};
// 
const getUserById = async (userId) => {
    let [results, feilds] = await connection.query(`SELECT * FROM Users where id = ?`, [userId]); 
    let user = results && results.length >0? results[0]: {};
    return user;
}
// 
const updateUserById = async (email, city, name, userId) => {
    let [result, feilds] = await connection.query(
        `update Users set email =?, city =?, name =? where id = ?`,
        [email, city, name, userId]
    );
}



module.exports = {
    getAllUsers, getUserById, updateUserById
};
