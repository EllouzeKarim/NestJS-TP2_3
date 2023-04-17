import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './Todo/todo.module';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { TodoEntity } from './Todo/entities/todo.entity';
import { NewtodoService } from './Todo/newtodo.service';
import { AuthentificationMiddleware } from './middlewares/authentification/authentification.middleware';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './user/user.module';
import { CvModule } from './cv/cv.module';
import { SkillModule } from './skill/skill.module';
import { Cv } from './cv/entities/cv.entity';
import { Skill } from './skill/entities/skill.entity';
import { User } from './user/entities/user.entity';
dotenv.config();
@Module({
  imports: [
    TodoModule,
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [TodoEntity, Cv, Skill, User],
      //autoLoadEntities:true,
      synchronize: true,
    }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UserModule,
    CvModule,
    SkillModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthentificationMiddleware).forRoutes('');
  }
}
