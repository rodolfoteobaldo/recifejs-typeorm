import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Type } from 'recife';

@Entity('user')
@Type()
class UserModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  email?: string;

  @Column()
  username?: string;
}

export default UserModel;
