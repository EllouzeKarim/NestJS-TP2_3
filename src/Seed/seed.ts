import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SkillService } from '../skill/skill.service';
import { Skill } from '../skill/entities/skill.entity';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { CvService } from '../cv/cv.service';
import { Cv } from '../cv/entities/cv.entity';
import {
  randEmail,
  randFirstName,
  randJobArea,
  randJobTitle,
  randLastName,
  randNumber,
  randUserName,
} from '@ngneat/falso';


async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const skillService = app.get(SkillService);
  for (let i = 1; i < 10; i++) {
    const skill = new Skill();
    skill.designation = randJobArea();
    await skillService.create(skill);
  }

  const userService = app.get(UserService);
  for (let i = 1; i < 10; i++) {
    const user = new User();
    user.email = randEmail();
    user.username = randUserName();
    user.password = i % 3 == 0 ? 'admin' : 'user';
    await userService.create(user);
  }

  const cvService = app.get(CvService);
  const users = await userService.findAll();
  const skills = await skillService.findAll();
  for (let i = 1; i < 10; i++) {
    const cv = new Cv();
    cv.name = randLastName();
    cv.firstname = randFirstName();
    cv.age = randNumber({ min: 16, max: 75 });
    cv.cin = randNumber({ length: 8 }).toString();
    cv.job = randJobTitle();
    cv.path = 'test.jpg';
    cv.user = users[randNumber({ min: 1, max: 10 })];
    cv.skills = [];
    cv.skills.push(skills[1]);
    cv.skills.push(skills[2]);


    await cvService.create(cv);
  }

  await app.close();
}
bootstrap();
