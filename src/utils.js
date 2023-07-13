import {fileURLToPath} from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';	
import passport from "passport";
import nodemailer from "nodemailer";
import config from "./config/config.js";

const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename);

export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10)); 
export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password); 

export const passportCall = (strategy) => {
	return async (req, res, next) => {
	  passport.authenticate(strategy, function (err, user, info) {
		if (err) return next(err);
  
		if (!user) {
		  return res
			.status(401)
			.send({ error: info.messages ? info.messages : info.toString() });
		}
  
		req.user = new UsersDto(user);
		next();
	  })(req, res, next);
	};
  };
  

export class errorWithStatusCode extends Error {
	constructor(message, httpStatusCode) {
			super(message);
			this.httpStatusCode = httpStatusCode;
	}
}

export const transporter = nodemailer.createTransport({
	service: "gmail",
	port: 587,
	auth: {
	  user: config.gmail_user,
	  pass: config.gmail_pass,
	},
  });

export default __dirname;