import { Request, Response } from 'express';
import UserService from '../services/user.services';
import { ILogin } from '../interfaces/ILogin';

export default class UserController {
  public userService = new UserService();

  async login(req: Request<object, object, ILogin>, res: Response) {
    const { body } = req;
    
    const result = await this.userService.login(body);
    if (result.token) { return res.status(200).json({ token: result.token }); }
    return res.status(result.type).json({ message: result.message });
  }
}