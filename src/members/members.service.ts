import { Injectable } from '@nestjs/common';
import { Member } from './entities/member.entitiy.js';
import { CreateMemberDto } from './dto/create-member-dto.js';

@Injectable()
export class MembersService {
    private members: Member[] = [
        {
            id : 1,
            name : 'John Doe',
            email : 'John.doe@gmail.com',
            phone : '0812-8472-9103',
            password : 'john2468'
        },
        {
            id : 2,
            name : 'Juki',
            email : 'Juki@gmail.com',
            phone : '0856-3921-5048',
            password : 'juki3579'
        },
        {
            id : 3,
            name : 'Rizky',
            email : 'Rizky@gmail.com',
            phone : '0821-7748-2931',
            password : 'rizky8675'
            
        }
        
    ];
    findAll() {
        return this.members;
    }
    
    findById(id: number): Member | undefined {
        return this.members.find(member => member.id === id);
    }
   
}
