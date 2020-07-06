import { EntityRepository, Repository } from 'typeorm';
import UserModel from '../models/UserModel';

@EntityRepository()
export class UserRepository extends Repository<UserModel> {
  findByName(name: string) {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getRawOne();
  }
}
