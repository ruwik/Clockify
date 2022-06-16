const Project = require('./models/Project');
const Assignee = require('./models/Assignee')

const createProject = (req, res) => {
    const project = new Project(req.body.name, req.body.client)
    req.app.timeManager.addProject(project);
    res.status(201);
    res.json({id:project.id})
};

const deleteProject = (req, res) => {
    req.app.timeManager.deleteProject(req.body.projectId);
    req.text("Deleted Successfully")
}

const record = (req, response) => {
    response.send(req.app.timeManager.record(req.body.projectId, new Assignee(req.body.task, req.body.time)));
}

module.exports = {
    createProject,
    deleteProject,
    record
    // getAllProjects
}