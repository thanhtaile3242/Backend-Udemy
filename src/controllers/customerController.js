const {upLoadSingleFile} = require('../services/fileService')
const {createCustomerService, createArrayCustomerService, getAllCustomersService, putUpdateCustomersService, deleteCustomersService, deleteArrayCustomerService} = require("../services/customerService");
// 
module.exports = {
    postCreateCustomer : async(req, res)=>{
       let {name, address, phone, email, description} = req.body;
    // Image    
        let imageUrl = "";
        if(!req.files || Object.keys(req.files).length === 0){
        }else{
        let result = await upLoadSingleFile(req.files.image);
        imageUrl = result.path;
        } 
    // 
        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);
        return res.status(200).json(
            {
                EC: 0, 
                data: customer
            })
    },
    postCreateArrayCustomer: async(req, res) => {
        let customers =  await createArrayCustomerService(req.body.customers);
        if(customers){
            return res.status(200).json(
                {
                    EC: 0, 
                    data: customers
                })
        }else{
            return res.status(200).json(
                {
                    EC: -1, 
                    data: customers
                })
        }
    },
    getAllCustomers : async (req, res) => {
        let result = await getAllCustomersService()
        return res.status(200).json({
         Error: 0,
         data: result,
    })},
    putUpdateCustomer : async (req, res) =>{
        let {id, name, email,address} = req.body;
        let result = await putUpdateCustomersService(id, name, email, address);
        return res.status(200).json(
            {
                EC: 0, 
                data: result
            })
    },
    deleteCustomer: async (req,res) => {
        let id = req.body.id;
        let result = await deleteCustomersService(id);
        return res.status(200).json(
            {
                EC: 0, 
                data: result
            })
    },
    deleteArrayCustomers: async (req, res) => {
        let customers =  await deleteArrayCustomerService(req.body.customersId);
        if(customers){
            return res.status(200).json(
                {
                    EC: 0, 
                    data: customers
                })
        }else{
            return res.status(200).json(
                {
                    EC: -1, 
                    data: customers
                })
        }
    }
}