import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service.js';
import { Param, Body } from '@nestjs/common';
import { CreateCategoriesDto } from './dto/create-categories-dto.js';
import { UpdateCategoriesDto } from './dto/update-categories-dto.js';


@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

        @Get()
        findAll() {
            return this.categoriesService.findAll();

        }

        @Get(':id')
        findById(@Param('id') id: string) {
            return this.categoriesService.findById(parseInt(id));
        }

        @Post()
        create(@Body() CreateCategoriesDto: CreateCategoriesDto) {
            return this.categoriesService.create(CreateCategoriesDto as any);
        }

        @Patch(':id')
        update(@Param('id') id: string, @Body() UpdateCategoriesDto: UpdateCategoriesDto) {
            return this.categoriesService.update(parseInt(id), UpdateCategoriesDto as any);
        }

        @Delete(':id')
        remove(@Param('id') id: string) {
            return this.categoriesService.delete(parseInt(id));
        }
}