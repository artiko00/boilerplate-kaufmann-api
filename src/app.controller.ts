import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @ApiResponse({status: HttpStatus.OK,description: 'OK'})
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
