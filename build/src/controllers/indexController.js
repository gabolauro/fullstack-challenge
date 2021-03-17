"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        // res.send('Hello')
        res.json({ text: 'API esta en /api/v1/alertas' });
    };
    return IndexController;
}());
var indexControler = new IndexController();
exports.default = indexControler;
