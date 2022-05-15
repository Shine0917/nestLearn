import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './module/admin/login/login.controller';
import { ManagerController } from './module/admin/manager/manager.controller';

@Module({
  imports: [],
  controllers: [AppController, LoginController, ManagerController],
  providers: [AppService],
})
export class AppModule {}
