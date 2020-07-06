import { Type } from 'recife';

@Type()
class UserModel {
  id?: number;

  name?: string;

  email?: string;

  username?: string;
}

export default UserModel;
