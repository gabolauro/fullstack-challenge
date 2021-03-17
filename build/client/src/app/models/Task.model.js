"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskItem = void 0;
var TaskItem = /** @class */ (function () {
    function TaskItem(name, description, manager, asignated) {
        this.name = name;
        this.description = description;
        this.manager = manager;
        this.asignated = asignated;
    }
    return TaskItem;
}());
exports.TaskItem = TaskItem;
