// import Joi from 'joi';
// import { IMessage } from '../interfaces/IMessage';
import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/user.model';
// import { IToken } from '../interfaces/IToken';
import { ILogin } from '../interfaces/ILogin';

export default class UserService {
  public user = new UserModel(); // atributo

  public jwt = jsonwebtoken;

  public async login(loginBody: ILogin) {
    const user = await this.user.getUserByUsernameAndPassword(loginBody);
    return this.generateToken(user[0]);
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