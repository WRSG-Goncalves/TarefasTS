"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IIFE to preserve code scope
var todo_1 = require("../src/model/todo");
var reminder_1 = require("../src/model/reminder");
(function () {
    // Mocks
    var todoMock = new todo_1.Todo("Atualizando a lista de tarefas");
    var reminderMock = new reminder_1.Reminder("My brother's bday", new Date(), ['EMAIL']);
    var taskView = {
        render: function (tasks) {
            // Clear view
            var tasksList = document.getElementById("tasksList");
            while (tasksList === null || tasksList === void 0 ? void 0 : tasksList.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            }
            // Render Tasks
            // task.forEach((task) => console.log(JSON.stringify(task)));
            tasks.forEach(function (task) {
                var li = document.createElement("LI");
                var textNode = document.createTextNode(task.render());
                li.appendChild(textNode);
                tasksList === null || tasksList === void 0 ? void 0 : tasksList.appendChild(li);
            });
        },
    };
    // Controllers
    var TaskController = function (view) {
        var _a;
        var tasks = [todoMock, reminderMock];
        var handleTaskCreate = function (event) {
            event.preventDefault();
            view.render(tasks);
        };
        (_a = document
            .getElementById("taskForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", handleTaskCreate);
    };
    TaskController(taskView);
})();
