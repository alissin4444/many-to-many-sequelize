const { Model, DataTypes } = require("sequelize");

class Status extends Model {
    static init(sequelize) {
        super.init(
        {
            description: DataTypes.STRING
        }, 
        {
            sequelize,
            tableName: "status"
        }
        );
    }
}

module.exports = Status;