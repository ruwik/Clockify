class TimeManager {
    constructor(projects) {
        this.projects = projects;
    }

    addProject(project) {
        this.projects.push(project);
    }

    deleteProject(projectId) {
        this.projects = this.projects.filter((project) => !project.isProjectId(projectId));
    }

    record(projectId, assignee){
        return this.projects.find((p)=> p.isProjectId(projectId)).addAssignee(assignee)
    }
}

module.exports = TimeManager;