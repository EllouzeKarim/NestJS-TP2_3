import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Skill } from "./entities/Skill.entity";

@Module({
  controllers: [SkillController],
  providers: [SkillService],
  imports: [TypeOrmModule.forFeature([Skill])],
  exports: [SkillService]
})
export class SkillModule {}