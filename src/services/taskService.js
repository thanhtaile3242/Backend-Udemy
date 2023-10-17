const Task = require('../models/task');
const aqp = require('api-query-params');


module.exports = {
    // Get
     getTask: async(queryString) => {
        const page = queryString.page;
        const { filter, limit, population } = aqp(queryString);
        delete filter.page;
        let offset = (page - 1) * limit;
        result = await Task.find(filter)
            .populate(population).skip(offset).limit(limit).exec();
        return result
    },
    // Create
    createTask: async (data) => {
        if (data.type === "EMPTY-TASK") {
            let result = await Task.create(data);
            return result;
        }
    },
    // Update
    uTask: async (data) => {
        let result = await Task.updateOne({ _id: data.id }, { ...data });
        return result
    },
    // Delete
    dTask: async (id) => {
        let result = await Task.deleteById(id);
        return result
    }
}