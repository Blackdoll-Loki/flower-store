import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";


@Injectable()
export class ParseIntPipe implements PipeTransform<String, Number>{
  transform(value: string, metadata: ArgumentMetadata): Number {
    const val = parseInt(value, 10);
    console.log('Pipe')
    if(isNaN(val)){
      throw new BadRequestException('Validation failed')
    }
    return val;
  }
}