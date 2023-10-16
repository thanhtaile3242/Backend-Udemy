const Project = require('../models/project');

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
            let Result = await myProject.save();
            return Result
        }
    }
        
}