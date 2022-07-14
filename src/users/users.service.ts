/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {id: 0, name: 'Saleha'},
        {id: 1, name: 'Bhagia'},
        {id: 2, name: 'Areeba'}
    ]

    findAll(name?: string): User[] {
        if(name){
            return this.users.filter((user) => user.name === name)
        }
        return this.users;
    }

     findById(userId: number): User {
        return this.users.find(users => userId === users.id)
    }

    createUser(createUserDto: CreateUserDto): User{
        const newUser: User = {id: Date.now(), ...createUserDto}
        this.users.push(newUser);
        return newUser;
    }
}
