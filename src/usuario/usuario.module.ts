import { Module } from '@nestjs/common';
import { UusarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UusarioController],
  providers: [UsuarioService]
})
export class UsuarioModule { }
