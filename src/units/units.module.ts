import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitsService } from './units.service';
import {
  AdminUnitsController,
  PublicUnitsController,
} from './units.controller';
import { Unit } from './entities/unit.entity';

//modulo para manejar las unidades de las propiedades.
@Module({
  imports: [TypeOrmModule.forFeature([Unit])],
  providers: [UnitsService],
  controllers: [AdminUnitsController, PublicUnitsController],
  exports: [UnitsService],
})
export class UnitsModule {}
