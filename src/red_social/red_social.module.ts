import { Module } from '@nestjs/common';
import { RedsocialController } from './red_social.controller';
import { RedsocialService } from './red_social.service';
import { RedsocialEntity } from './red_social.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RedsocialEntity])],
  controllers: [RedsocialController],
  providers: [RedsocialService]
})
export class RedsocialModule { }
