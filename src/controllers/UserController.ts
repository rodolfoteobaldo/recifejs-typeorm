import { Query, Mutation } from 'recife';

import UserModel from '../models/UserModel';
import { UserForm, UserDelete } from '../inputs/UserInput';
import { UserRepository } from '../repositories/UserRepository';
import { getCustomRepository } from 'typeorm';

class UserController {
  userRepository: UserRepository;

  // constructor() {

  // }

  @Query()
  getUser(): UserModel {
    const user = new UserModel();
    user.name = 'Quaco Cainr';
    user.email = 'quacocainr@email.com';
    user.username = 'quacocainr';

    return user;
  }

  @Mutation()
  createUser(input: UserForm): UserModel {
    const user = new UserModel();
    user.name = input.name;
    user.email = input.email;
    user.username = input.username;
    this.userRepository = getCustomRepository(UserRepository);
    console.log(this.userRepository);
    this.userRepository.save(user);

    return user;
  }

  @Mutation()
  updateUser(input: UserForm): UserModel {
    const user = new UserModel();
    user.name = input.name;
    user.email = input.email;
    user.username = input.username;

    return user;
  }

  @Mutation()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteUser(input: UserDelete): boolean {
    return true;
  }
}

export default UserController;
