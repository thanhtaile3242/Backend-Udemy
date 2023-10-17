const Project = require('../models/project');
const aqp = require('api-query-params');
module.exports = {
    createProject: async (data) => {
        if (data.type === "EMPTY PROJECT") {
            let result = await Project.create(data);
            return result;
        }
        if (data.type === "ADD-USERS") {
            // find project by ID
            let myProject = await Project.findById(data.projectId);
            // Insert user Id into project
            for (let i = 0; i < data.userArr.length; i++) {
                myProject.usersInfor.push(data.userArr[i]);
            }
            let result = await myProject.save();
            return result
        }
        if (data.type === "REMOVE-USERS") {
            let myProject = await Project.findById(data.projectId);
            // Remove user in array input
            for (let i = 0; i < data.userArr.length; i++) {
                myProject.usersInfor.pull(data.userArr[i]);
            }

            let result = await myProject.save();
            return result;
        }
        // insert tasks for a project
        if (data.type === "ADD-TASKS") {
            let myProject = await Project.findById(data.projectId);
             for (let i = 0; i < data.taskArr.length; i++) {
                myProject.tasks.push(data.taskArr[i]);
             }
            let result = await myProject.save();
            return result
        }

    },
    // Get
    getProject: async(queryString) => {
        const page = queryString.page;
        const { filter, limit, population } = aqp(queryString);
        delete filter.page;
        let offset = (page - 1) * limit;
        result = await Project.find(filter)
            .populate(population).skip(offset).limit(limit).exec();
        return result
    },
    // Update
    uProject: async (data) => {
        let result = await Project.updateOne({ _id: data.id }, { ...data });
        return result
    },
    // Delete
    dProject: async (id) => {
        let result = await Project.deleteById(id);
        return result
    }
        
}