"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListComponent = void 0;
var core_1 = require("@angular/core");
var ListComponent = /** @class */ (function () {
    function ListComponent(taskService) {
        this.taskService = taskService;
        this.tasks = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    ListComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (res) {
            //opcion para abrir menu
            // Object.keys(res).forEach( (valor: any) => { 
            //      valor.menu = false;
            //      valor.delete = false;
            //     } );
            console.log(res);
            _this.tasks = res;
        });
    };
    ListComponent.prototype.deleteTask = function (id) {
        var _this = this;
        // console.log(id)
        this.taskService.deleteTask(id)
            .subscribe(function (res) {
            _this.getTasks();
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css']
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
