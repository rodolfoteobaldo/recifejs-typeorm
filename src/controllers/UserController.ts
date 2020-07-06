import { Query, Mutation } from 'recife';

import UserModel from '../models/UserModel';
import AddressModel from '../models/AddressModel';
import { UserForm, UserDelete } from '../inputs/UserInput';

class UserController {
  addressDefault: AddressModel;

  constructor() {
    this.addressDefault = new AddressModel(
      'Av. Alfredo Lisboa',
      'Recife',
      'Pernambuco',
      '50020360'
    );
  }

  @Query()
  getUser(): UserModel {
    const user = new UserModel();
    user.name = 'Quaco Cainr';
    user.email = 'quacocainr@email.com';
    user.username = 'quacocainr';
    user.address = this.addressDefault;

    return user;
  }

  @Mutation()
  createUser(input: UserForm): UserModel {
    const user = new UserModel();
    user.name = input.name;
    user.email = input.email;
    user.username = input.username;
    user.address = this.addressDefault;

    return user;
  }

  @Mutation()
  updateUser(input: UserForm): UserModel {
    const user = new UserModel();
    user.name = input.name;
    user.email = input.email;
    user.username = input.username;
    user.address = this.addressDefault;

    return user;
  }

  @Mutation()
  deleteUser(input: UserDelete): boolean {
    return true;
  }
}

export default UserController;
