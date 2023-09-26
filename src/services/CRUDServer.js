const connection = require("../config/dataBase");
const getAllUsers = async () => {
    let [results, feilds] = await connection.query("select * from Users");
    return results;
};

module.exports = {
    getAllUsers,
};
