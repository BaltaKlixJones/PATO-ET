const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("Professional", {
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        profession: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        description: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        image: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    }, 
    { timestamps: false }
    );
    }