import { Entity, Repository, UpdateResult } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { HasIdInterface } from '../interface/has-id.interface';

export class CrudService<Entity extends HasIdInterface> {
  constructor(private readonly repository: Repository<Entity>) {}
  findAll(): Promise<Entity[]> {
    return this.repository.find();
  }
  create(addTodo): Promise<Entity> {
    return this.repository.save(addTodo);
  }
  async findOne(id): Promise<Entity> {
    const todo = await this.repository.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException('Todo innexistant');
    }
    return todo;
  }
  async update(id: number, updateTodo): Promise<Entity> {
    const newTodo = await this.repository.preload({
      id,
      ...updateTodo,
    });
    if (newTodo) {
      return this.repository.save(newTodo);
    }
    throw new NotFoundException('Entité innexistante');
  }
  remove(id: number): Promise<UpdateResult> {
    return this.repository.softDelete(id);
  }
  restore(id: number): Promise<UpdateResult> {
    return this.repository.restore(id);
  }
}
