import { TimestampEntity } from 'src/generics/db/timestamp.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cv } from '../../cv/entities/cv.entity';
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
