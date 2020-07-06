import { Type } from 'recife';
import AddressModel from './AddressModel';

@Type()
class UserModel {
  name?: string;
  email?: string;
  username?: string;
  address?: AddressModel;

  static getAddress(user: UserModel) {
    return user.address;
  }
}

export default UserModel;
