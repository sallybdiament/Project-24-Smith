import { Request, Response } from 'express';
// import { IUser } from '../interfaces/IUser';
import UserService from '../services/user.services';

export default class UserController {
  public userService = new UserService();

  async create(req: Request, res: Response) {
    const newUser = req.body;
    const newUserCreated = await this.userService.create(newUser);
    return res.status(201).json({ token: this.userService.generateToken(newUserCreated) });
  }
}
