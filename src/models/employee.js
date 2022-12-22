'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee.init(
    {
      emp_name: DataTypes.STRING,
      emp_dob: DataTypes.STRING,
      emp_phone: DataTypes.STRING,
      emp_address: DataTypes.STRING,
      emp_city: DataTypes.STRING,
      emp_joining_date: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'employees'
    }
  );
  return employee;
};
