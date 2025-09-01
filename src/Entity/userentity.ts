import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('UserInfo')
export class UserInfo {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  email!: string;
  @Column()
  password!: string;
}
