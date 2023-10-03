const User = require("../models/user.js");
const {upLoadSingleFile, upLoadMultipleFiles} = require("../services/fileService.js")
// GET (read - display)
const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        })
};
// POST (create)
const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.Myname;
    let city = req.body.Mycity;
    let user = await User.create({ email: email, name: name, city: city});
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        })
};
// PUT (update)
const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.Myname;
    let city = req.body.Mycity;
    let userId = req.body.userId;
    let user = await User.updateOne({_id:userId},{email:email, name:name, city:city});
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        })
};
// Delete 
const deleteUserAPI = async(req, res) => {
    const userId = req.body.userId;
    let result = await User.deleteOne({_id:userId});
    return res.status(200).json(
        {
            errorCode: 0,
            data: result,
        })
}
// Upload files
const postUploadSingleFileAPI = async (req, res) =>{
    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send('No files were uploaded.');
    }
    let result = await upLoadSingleFile(req.files.image)
    return res.status(200).json({
        Error: 0,
        data: result,
    })
        
}
;
// 
const postUploadMultipleFilesAPI = async (req, res) =>{
    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send('No files were uploaded.');
    }
    if (Array.isArray(req.files.image)){
        let result = await upLoadMultipleFiles(req.files.image);
        return res.status(200).json({
            Error: 0,
            data: result,
        })
    }else{
        return await postUploadSingleFileAPI(req, res);
    }
};
// 




module.exports = {getUsersAPI,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI, postUploadSingleFileAPI ,postUploadMultipleFilesAPI};