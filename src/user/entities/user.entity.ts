import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cv } from '../../cv/entities/cv.entity';
import {TimestampEntity} from "../../generics/db/timestamp.entity";
@Entity('user')
export class User extends TimestampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany((type) => Cv, (cv) => cv.user)
  cv: Cv[];
}
