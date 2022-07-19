import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDTO } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @Post()
  create(@Body() createRoleDTO: CreateRoleDTO) {
    return this.roleService.createRole(createRoleDTO);
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }

  @Get('/')
  getAllRoles() {
    return this.roleService.getAllRoles();
  }
}
