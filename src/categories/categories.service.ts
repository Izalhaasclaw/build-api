import { Injectable } from '@nestjs/common';
import { Categories } from './entities/category.entitiy.js';
import { CreateCategoriesDto } from './dto/create-categories-dto.js';
import { UpdateCategoriesDto } from './dto/update-categories-dto.js';


@Injectable()
export class CategoriesService {
    private categories: Categories[] = [
        {
            id : 1,
            name : ''
        },
        {
            id : 2,
            name : ''
        },
        {
            id : 3,
            name : ''
        },
        {
            id : 4,
            name : ''
        },
        {
            id : 5,
            name : ''
        }
    ];

    findAll(): Categories[] {
        return this.categories;
    }

    create(inputCategory: CreateCategoriesDto): Categories {
        const newCategory: Categories ={
            id: this.categories.length + 1,
            name: inputCategory.name
        };
        this.categories.push(newCategory);
        return newCategory;
    }

    findById(id: number): Categories | undefined {
            return this.categories.find(category => category.id === id);
    }

    update(id: number, updatedCategory: UpdateCategoriesDto): Categories | undefined {
            const categoryIndex = this.categories.findIndex(category => category.id === id);
            if (categoryIndex !== -1) {
                this.categories[categoryIndex] = { ...this.categories[categoryIndex], ...updatedCategory };
                return this.categories[categoryIndex];
            }
            return undefined;
    }

    delete(id: number): boolean {
            const categoryIndex = this.categories.findIndex(category => category.id === id);
            if (categoryIndex !== -1) {
                this.categories.splice(categoryIndex, 1);
                return true;
            }
            return false;
    }
}    
