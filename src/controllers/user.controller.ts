import { Request, Response } from 'express';
import UserService from '../services/user.services';

export default class UserController {
  public userService = new UserService();

  async create(req: Request, res: Response) {
    const newUser = req.body;
    await this.userService.create(newUser);
    const token = this.userService.login(newUser);
    res.status(201).json(token);
  }
}