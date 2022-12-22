import HttpStatus from 'http-status-codes';
import * as EmployeeServices from '../services/employee.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addingEmployee = async (req, res, next) => {
    try {
        const data = await EmployeeServices.addingEmployees(req.body)
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: "Employee added successfully"
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: "Employee not added"
        })
    }
}

/**
 * Controller to get all employees
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllEmployees = async (req, res, next) => {
    try {
        const data = await EmployeeServices.getAllEmployees()
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: "Employees data fetched successfully"
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: "Error"
        })
    }
}

/**
 * Controller to get a single employee
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getSingleEmployee = async (req, res, next) => {
    try {
        const data = await EmployeeServices.getSingleEmployee(req.params.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Employee fetched successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: "Employee not fetched"
        })
    }
};

/**
 * Controller to update employee details
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateEmployee = async (req, res, next) => {
    try {
        const data = await EmployeeServices.updateEmployee(req.params.id, req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Employee updated successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: "Employee not updated"
        })
    }
};

/**
 * Controller to delete employee details
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteEmployee = async (req, res, next) => {
    try {
        const data = await EmployeeServices.deleteEmployee(req.params.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Employee deleted successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: "Employee not deleted"
        })
    }
};