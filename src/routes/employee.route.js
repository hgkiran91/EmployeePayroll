import express from 'express';
import * as employeeController from '../controllers/employee.controller';
import { employeeValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add employees
router.post('', employeeValidator, userAuth, employeeController.addingEmployee);

//route to get all employees
router.get('', userAuth, employeeController.getAllEmployees);

//route to get single employee
router.get('/:id', userAuth, employeeController.getSingleEmployee);

//router to update employee
router.put('/:id', userAuth, employeeController.updateEmployee);

//router to delete employee
router.delete('/:id', userAuth, employeeController.deleteEmployee);

export default router;