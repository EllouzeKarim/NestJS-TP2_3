import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Cv } from '../../cv/entities/cv.entity';
@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  designation: string;
  @ManyToMany((type) => Cv, (cvs) => cvs.skills)
  cvs: Cv[];
}
