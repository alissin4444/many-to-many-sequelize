const { Model, DataTypes } = require("sequelize");

class Boy extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            idade: DataTypes.INTEGER
        }, {
            sequelize, 
            tableName: "boys"
        }) 
    }

    static associate(models) {
        this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status' });
    }
}

module.exports = Boy;