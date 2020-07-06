import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
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
