import sequelize, { DataTypes } from '../config/database';
const User = require('../models/user')(sequelize, DataTypes);
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//create new user
export const newUserRegistration = async (body) => {
  console.log("Before hashing body-> ", body);
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashPassword;
  console.log("After hashing body-> ", body);
  const data = await User.create(body);
  return data;
};

//create new user
export const userLogin = async (body) => {
  let EMAIL = body.email;
  let PASSWORD = body.password;
  const data = await User.findOne({ where: { email: EMAIL } });
  // return data;
  // console.log("User Details-> ", data);
  if (data == null) {
    return new Error("User dosen't exist");
  } else {
    const result = await bcrypt.compare(PASSWORD, data.password);
    console.log("Result-> ", result);
    if (result) {
      const token = jwt.sign({ "id": data.id, "firstName": data.firstName, "email": data.email }, process.env.SECRET_KEY);
      console.log("Token-> ", token);
      return token;
    } else {
      return new Error("Invalid Password");
    }
  }
};
