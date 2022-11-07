import Joi from 'joi';
// import { IMessage } from '../interfaces/IMessage';
import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/user.model';
import { ILogin } from '../interfaces/ILogin';

export default class UserService {
  public user = new UserModel(); // atributo

  public jwt = jsonwebtoken;

  public async login(loginBody: ILogin) {
    const newProductSchema = Joi.object({
      username: Joi.string().required()
        .messages({ 
          'string.base': '"username" should be a type of \'text\'',
          'string.empty': '"username" is required',
          'any.required': '"username" is a required field' }),
      password: Joi.string().required()
        .messages({ 
          'string.base': '"password" should be a type of \'text\'',
          'string.empty': '"password" is required',
          'any.required': '"password" is a required field' }),
    });
    const { error } = newProductSchema.validate(loginBody);
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

  public create(userData: IUser): Promise<IUser> {
    const newCreatedUser = this.user.create(userData);
    return newCreatedUser;
  }
}