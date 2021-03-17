"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var alertasControllers_1 = __importDefault(require("../controllers/alertasControllers"));
var AlertasRoutes = /** @class */ (function () {
    function AlertasRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    AlertasRoutes.prototype.config = function () {
        this.router.get('/', alertasControllers_1.default.list);
        this.router.get('/:id', alertasControllers_1.default.getone);
        this.router.post('/', alertasControllers_1.default.create);
        this.router.put('/:id', alertasControllers_1.default.update);
        this.router.delete('/:id', alertasControllers_1.default.delete);
    };
    return AlertasRoutes;
}());
var alertasRoutes = new AlertasRoutes();
exports.default = alertasRoutes.router;
