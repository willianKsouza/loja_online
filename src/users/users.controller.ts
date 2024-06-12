import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './create/dto/create.user.dto';
import { CreateService } from './create/create.service';

import { ApiBearerAuth, ApiBody, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { UpdateUserService } from './update/update.service';
import { UpdateUserDto } from './update/dto/update.user.dto';
import { AuthJWTGuard } from 'src/auth/guards/auth.guard';


@Controller('users')
export class UsersController {
  constructor(private readonly CreateService: CreateService, private readonly UpdateUserService: UpdateUserService) {}
  
  @ApiBody({ type: [CreateUserDto] })
  @ApiResponse({ status: 201, description: 'usuario criado com sucesso.'})
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.CreateService.create(createUserDto);
    } catch (error) {
      throw new HttpException(error.response, error.status)
    }
  }


  // @UseGuards(AuthJWTGuard)
  @ApiBody({ type: [UpdateUserDto] })
  @Patch(':id')
  async update(@Param('id') id: string, @Body()  updateUserDto: UpdateUserDto) {
    try {
      await this.UpdateUserService.update(id, updateUserDto)
    } catch (error) {
      throw new HttpException(error.response, error.status)
    }
  }

}


  // @Get()
  // findAll() {
  //   return this.CreateService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }



  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }