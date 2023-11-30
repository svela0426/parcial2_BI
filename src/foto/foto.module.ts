import { Module } from '@nestjs/common';
import { FotoController } from './foto.controller';
import { FotoService } from './foto.service';
import { FotoEntity } from './foto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FotoEntity])],
  controllers: [FotoController],
  providers: [FotoService]
})
export class FotoModule { }
