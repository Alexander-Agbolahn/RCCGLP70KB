import validator from 'validator';
import isEmpty from 'lodash.isempty';
import jwt from 'jsonwebtoken';
import isInt from 'validator/lib/isInt.js';
import Model from '../models/index.js';

const { User } = Model;


export default class Middleware {
	static validateSignup(req, res, next){
		const { firstname, lastname, username, email, password, phone_number, role } = req.body;
		const error = {};

		if (!email || (email && !validator.isEmail(email))) {
			error.email = 'email is required';
		}
		if (!isNaN(firstname)) {
			error.name = 'name cannot be a number ';
		}
		if (!isNaN(lastname)) {
			error.name = 'name cannot be a number ';
		}
		if (isNaN(phone_number)) {
			error.phone_number = 'phone number cannot be an alphabet';
		}

		if (!isNaN(username)) {
			error.username = 'username cannot be a number ';
		}else if (!username || (username && validator.isEmpty(username.trim()))) {
	    error.username = 'username is required';
	  }

	  if (!password || (password && validator.isEmpty(password.trim()))) {
	    error.password = 'password is required';
	  }

	  if (isEmpty(error)) {
	    return next();
	  }

	  return res.status(400).json({
	    status: 'error',
	    error,
	  });
	}

	static validateSignin(req, res, next){
		const { email, password } = req.body;
		const error = {};

		if (!email || (email && validator.isEmpty(email.trim()))) {
	    error.email = 'email is required';
	  }

	  if (!password || (password && validator.isEmpty(password.trim()))) {
	    error.password = 'password is required';
	  }

	  if (isEmpty(error)) {
	    return next();
	  }

	  return res.status(400).json({
	    status: 'error',
	    error,
	  });
	}
}