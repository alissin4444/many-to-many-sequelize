const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Status = require("../models/Status");
const Boy = require("../models/Boy");

const connection = new Sequelize(dbConfig);

Status.init(connection);
Boy.init(connection);

Boy.associate(connection.models);

module.exports = connection;