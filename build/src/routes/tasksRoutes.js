"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tasksControllers_1 = __importDefault(require("../controllers/tasksControllers"));
var TasksRoutes = /** @class */ (function () {
    function TasksRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    TasksRoutes.prototype.config = function () {
        this.router.get('/', tasksControllers_1.default.list);
        this.router.get('/:id', tasksControllers_1.default.getone);
        this.router.post('/', tasksControllers_1.default.create);
        this.router.put('/:id', tasksControllers_1.default.update);
        this.router.delete('/:id', tasksControllers_1.default.delete);
    };
    return TasksRoutes;
}());
var taskssRoutes = new TasksRoutes();
exports.default = taskssRoutes.router;
