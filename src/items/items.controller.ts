import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';


@Controller('items')
export class ItemsController {
@Get()
findAll(): string{
    return 'Get all items';
}

@Get(':id')
  findOne(@Param('id') id): string{
    return `item ${id}`;
}

@Delete(':id')
 delete(@Param('id') id): string{
    return `Delete ${id} successfully`
 }

 @Put(':id')
 update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string{
        return `Update ${id} - Name: ${updateItemDto.name}, Description ${updateItemDto.description}`
 }

@Post()
create(@Body() createItemDto: CreateItemDto): string{
 return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`
}

}

