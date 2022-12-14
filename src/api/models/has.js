const db = require("../../../db");
const { DataTypes } = require("sequelize");

const has = db.define(
    "has",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      pswd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phno: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps:true,
    },
    {
      tableName: "has",
    }
  );
  
  const hasArchives = db.define(
    "hasArchives",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      phno: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      fromDate:{
        type: DataTypes.DATEONLY,
      },
      toDate:{
        type: DataTypes.DATEONLY,
      }
    },
    {
      timestamps:false,
    },
    {
      tableName: "hasArchives",
    }
  );
  
module.exports = {
  has,
  hasArchives
}