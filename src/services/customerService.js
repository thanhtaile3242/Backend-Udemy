const Customer = require("../models/customer");
const aqp = require('api-query-params');
const createCustomerService = async (customerData)=>{
    try{
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return result;
    }catch(err)
    {
        console.log(err);
        return null;
    }
}

const createArrayCustomerService = async (arr) => {
    try{
        let result = await Customer.insertMany(arr);
        console.log("error>>>", result);
        return result;
    }catch(err){
        console.log("error>>>", err);
        return null
    }
}

const getAllCustomersService = async (limit, page, queryString) => {
    try{
        let result = null;
        if (limit && page){
            let offset = (page - 1) * limit;
            const { filter } = aqp(queryString);
            delete filter.page;
            result = await Customer.find(filter).skip(offset).limit(limit).exec(); 
        }else{
            result = await Customer.find({});
        }
        return result
    }catch(err){
        console.log("error>>>", err);
        return null;
}}

const putUpdateCustomersService = async (id, name, email, address) => {
    try{
        let result = await Customer.updateOne({_id: id}, {name: name, email: email, address: address});
        return result;
    }catch(err){
        console.log("error>>>", err);
        return null;
    }
}

const deleteCustomersService = async (id) => {
    try{
        let result = await Customer.deleteById({_id: id}); // Soft delete
        return result;
    }catch(err){
        console.log("error>>>", err);
        return null;
    }
}

const deleteArrayCustomerService = async (arr) => {
    try{
       let result = await Customer.delete({_id: {$in: arr}}); // Delete by an array of ids
       return result;
    }catch(err){
        console.log("error>>>", err);
        return null;
    }
}



module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomersService, putUpdateCustomersService, deleteCustomersService, deleteArrayCustomerService
}