const express = require('express');
const app = express();
const handlers = require('./handlers.js');
const TimeManager = require('./mangers/TimeManager');

app.use(express.json())
app.use(express.static('public'))
app.timeManager = new TimeManager([]);

// app.get("/projects", handlers.getAllProjects)
app.post("/project/create", handlers.createProject)
app.post("/project/delete", handlers.createProject)
app.post("/project/record", handlers.record)

module.exports = app;