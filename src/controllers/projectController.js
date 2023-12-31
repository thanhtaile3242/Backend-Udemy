const { createProject, getProject, uProject, dProject } = require('../services/projectService');

module.exports = {
    // Create
    postCreateProject: async (req, res) => {
        let result = await createProject(req.body);
        return res.status(200).json({
            EC: 0,
            data: result,
        })
    },

    // Get
    getAllProjects: async (req, res) => {
        let result = await getProject(req.query);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },
    // Update
    updateProjects: async (req, res) => {
        let result = await uProject(req.body);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },
    // Delete
    deleteProjects: async (req, res) => {
        let result = await dProject(req.body.id);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },
}


