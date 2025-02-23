import { Controller, Get, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/pipe';
import { Guard } from 'src/conception/guard';
import { LogginInterceptor } from 'src/conception/interceptor';

@Controller('flowers')
@UseInterceptors(LogginInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(Guard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number){
  // findAll(){
    console.log('Controller')
    console.log(pageNumber)
    return this.flowersService.findAll()
  }
}
// function AuthGuard(): Function | import("@nestjs/common").CanActivate {
//   throw new Error('Function not implemented.');
// }

