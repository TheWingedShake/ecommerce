import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {
  }

  async findOne(email: string): Promise<Users> {
    return await this.usersRepository.findOne({
      where: [
        {email},
      ],
    });
  }

  async findByPk(id: number): Promise<Users> {
    return await this.usersRepository.findOne(id);
  }

  async create(userData: Users): Promise<Users> {
    userData.password = await bcrypt.hash(userData.password, 10);
    try {
      return await this.usersRepository.save(userData);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async update(userData: Users): Promise<UpdateResult> {
    return await this.usersRepository.update(userData.id, userData);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }

}
