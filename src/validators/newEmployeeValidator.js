import Joi from '@hapi/joi';

const employeeValidator = (req, res, next) => {
    const schema = Joi.object({
        emp_name: Joi.string().min(3).required(),
        emp_dob: Joi.string().min(3).required(),
        emp_phone: Joi.string().min(3).required(),
        emp_address: Joi.string().min(8).required(),
        emp_city: Joi.string().min(8).required(),
        emp_joining_date: Joi.string().required()
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        next(error);
    } else {
        req.validatedBody = value;
        next();
    }
};

export default employeeValidator;