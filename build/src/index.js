"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
// Para el front
var path_1 = __importDefault(require("path"));
var indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
var tasksRoutes_1 = __importDefault(require("./routes/tasksRoutes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.front = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.front.set('port', process.env.PORT || 4000);
        this.front.use(express_1.default.static(path_1.default.join(__dirname, 'client')));
        this.app.set('port', 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/v1/tasks', tasksRoutes_1.default);
        this.front.get('/', function (req, res) {
            res.sendFile(path_1.default.join(__dirname + '/client/index.html'));
        });
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('SERVER ON PORT', _this.app.get('port'));
        });
        this.front.listen(this.front.get('port'), function () {
            console.log('FRONT ON PORT', _this.front.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
