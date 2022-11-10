import jsonwebtoken from 'jsonwebtoken';
import Joi from 'joi';
// import { IMessage } from '../interfaces/IMessage';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/user.model';
import { ILogin } from '../interfaces/ILogin';

const messageIsRequired = '400 | {{#label}} is required';
const messageIsString = '422 | {{#label}} must be a string';

export default class UserService {
  public user = new UserModel(); // atributo

  public jwt = jsonwebtoken;

  public async login(loginBody: ILogin) {
    const newUserSchema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),  
    }).messages({ 
      'string.base': messageIsString,
      'string.empty': messageIsRequired,
      'any.required': messageIsRequired });

    const { error } = newUserSchema.validate(loginBody);
    if (error) return { type: 400, message: error.details[0].message };
    const user = await this.user.getUserByUsernameAndPassword(loginBody);

    if (user.length === 0) { return { type: 401, message: 'Username or password invalid' }; }
    return { type: 200, token: this.generateToken(user[0]) };
  }

  public generateToken(user: IUser) {
    const payload = { id: user.id, username: user.username }; 
    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }

  public async create(userData: IUser) {
    const newUserSchema = Joi.object({
      username: Joi.string().required().min(2),
      classe: Joi.string().required().min(2),
      level: Joi.number().required().min(1),
      password: Joi.string().required().min(8),  
    }).messages({ 
      'string.base': messageIsString,
      'string.empty': messageIsRequired,
      'number.base': '422 | {{#label}} should be a type of \'number\'',
      'number.empty': '422 | {{#label}} is required',
      'string.min': '422 | {{#label}} length must be at least {{#limit}} characters long',
      'number.min': '422 | {{#label}} must be greater than or equal to 1',
      'any.required': messageIsRequired });

    const { error } = newUserSchema.validate(userData);
    if (error) throw new Error(error.details[0].message);
    const newCreatedUser = await this.user.create(userData);
    return newCreatedUser;
  }
}