"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
var core_1 = require("@angular/core");
var TasksService = /** @class */ (function () {
    function TasksService(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api/v1/tasks';
    }
    TasksService.prototype.getTasks = function () {
        return this.http.get(this.API_URI);
    };
    TasksService.prototype.getTask = function (id) {
        return this.http.get(this.API_URI + "/" + id);
    };
    TasksService.prototype.saveTask = function (task) {
        return this.http.post(this.API_URI, task);
    };
    TasksService.prototype.updateTask = function (id, updatedTask) {
        return this.http.put(this.API_URI + "/" + id, updatedTask);
    };
    TasksService.prototype.deleteTask = function (id) {
        return this.http.delete(this.API_URI + "/" + id);
    };
    TasksService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TasksService);
    return TasksService;
}());
exports.TasksService = TasksService;
