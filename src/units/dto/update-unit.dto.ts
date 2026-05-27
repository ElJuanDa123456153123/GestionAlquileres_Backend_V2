import { PartialType } from '@nestjs/swagger';
import { CreateUnitDto } from './create-unit.dto';
//validaciones del dto para actualizar 
export class UpdateUnitDto extends PartialType(CreateUnitDto) {}
