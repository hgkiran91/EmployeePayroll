import sequelize, { DataTypes } from '../config/database';
const employee = require('../models/employee')(sequelize, DataTypes);

//adding employees
export const addingEmployees = async (body) => {
    const data = await employee.create(body)
    return data;
}

//get all employees
export const getAllEmployees = async (id) => {
    const data = await employee.findAll({ where: { id: id } })
    return data;
}

//get single employee
export const getSingleEmployee = async (id) => {
    const data = await employee.findOne({ where: { id: id } })
    return data;
}

// update single employee
export const updateEmployee = async (id, body) => {
    const data = await employee.update(body, { where: { id: id } });
    return data;
};

// delete single note
export const deleteEmployee = async (id) => {
    const data = await employee.destroy({ where: { id: id } });
    return data;
};