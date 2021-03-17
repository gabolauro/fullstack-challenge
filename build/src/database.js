"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_mysql_1 = __importDefault(require("promise-mysql"));
var keys_1 = __importDefault(require("./keys"));
var pool = promise_mysql_1.default.createPool(keys_1.default.database);
// Para usar esta función isntalar una versón anterior de promise-mysql // npm i promise-mysql@3.3.1
pool.getConnection()
    .then(function (connection) {
    pool.releaseConnection(connection);
    console.log('Eicom MySQL conectada');
});
exports.default = pool;
