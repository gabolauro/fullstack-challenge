"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditComponent = void 0;
var core_1 = require("@angular/core");
var EditComponent = /** @class */ (function () {
    function EditComponent(taskService, router, activatedRoute) {
        this.taskService = taskService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.task = {
            name: '',
            description: '',
            manager: '',
            asignated: '',
            status: ''
        };
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.activatedRoute.snapshot.params;
        if (params.id) {
            // console.log(params.id)
            this.taskService.getTask(params.id)
                .subscribe(function (res) {
                // console.log(res)
                _this.task = res;
            });
        }
    };
    EditComponent.prototype.updateTask = function (forma) {
        var _this = this;
        console.log(this.task.id, forma.value);
        this.taskService.updateTask(this.task.id, forma.value)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/list']);
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.css']
        })
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
