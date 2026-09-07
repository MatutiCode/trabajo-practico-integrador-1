import { DataTypes, dataTypes } from "sequelize";
import { sequelize } from "../config/db.js"

export const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: dataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false,
        },
        role: {
            type: dataTypes.ENUM("user", "admin"),
            allowNull: false,
            defaultValue: "user",
        },

    },
    {
        tableName: "Users",
        underscored: true,
        paranoid: true,
        timestamps: true,
    }
);