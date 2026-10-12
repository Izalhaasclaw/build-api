import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entitiy.js';
import { UpdateBookDto } from './dto/update-book-dto.js';

@Injectable()
export class BooksService {
    private books: Book[] = [
        {
            id: 1,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            isbn: '978-0-7432-7356-5',
            publishedYear: 1925,
            isAvailable: true
        },
        {
            id: 2,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            isbn: '978-0-06-112008-4',
            publishedYear: 1960,
            isAvailable: true
        },
        {
            id: 3,
            title: '1984',
            author: 'George Orwell',
            isbn: '978-0-452-28423-4', 
            publishedYear: 1990,
            isAvailable: true
        },
    ];

    //
    findAll(): Book[] {
        return this.books;
    }

    create(inputbook: Book): Book {
        const newBook: Book = {
            id: this.books.length + 1,
            title: inputbook.title,
            author: inputbook.author,
            isbn: inputbook.isbn,
            publishedYear: inputbook.publishedYear,
            isAvailable: true
        };
        this.books.push(newBook);
        return newBook;
    }

    //
    findById(id:number): Book | undefined {
        return this.books.find(book => book.id == id);
    }

    //
    update(id: number, updateBook: UpdateBookDto): Book | undefined {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            return this.books[bookIndex] = {...this.books[bookIndex], ...updateBook};
        }
        return undefined;
    }

    //
    delete(id : number): boolean {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return true;
        }
        return false;
    }

}