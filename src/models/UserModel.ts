import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Type } from 'recife';

@Entity('user')
@Type()
class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  email?: string;

  @Column()
  username?: string;
}

export default User;
