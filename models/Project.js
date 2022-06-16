class Project {
    constructor(name, client) {
        this.id = Math.floor(Math.random()*1000);
        this.name = name;
        this.client = client;
        this.assignees = [];
    }

    isProjectId(id){
        return this.id === id;
    }

    getTotalTime(timeInSeconds){
        return this.assignees.reduce((acc, timeInSeconds) => acc+timeInSeconds ,0)
    }

    addAssignee(assignee){
        this.assignees.push(assignee)
        return {
            totalTime: this.getTotalTime(),
            tasks: this.assignees
        };
    }
}

module.exports = Project