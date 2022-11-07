import { Request, Response } from 'express';
import UserService from '../services/user.services';

export default class UserController {
  public userService = new UserService();

  async create(req: Request, res: Response) {
    const newUser = req.body;
    const newUserCreated = await this.userService.create(newUser);
    const token = { token: this.userService.generateToken(newUserCreated) };
    res.status(201).json(token);
  }
}