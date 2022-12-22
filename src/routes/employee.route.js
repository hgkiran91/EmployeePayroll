import express from 'express';
import * as employeeController from '../controllers/employee.controller';
import { employeeValidator } from '../validators/user.validator';

const router = express.Router();

//route to add employees
router.post('', employeeValidator, employeeController.addingEmployee);

//route to get all employees
router.get('', employeeController.getAllEmployees);

//route to get single employee
router.get('/:id', employeeController.getSingleEmployee);

//router to update employee
router.put('/:id', employeeController.updateEmployee);

//router to delete employee
router.delete('/:id', employeeController.deleteEmployee);

export default router;