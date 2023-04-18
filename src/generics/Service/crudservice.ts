import { Repository, UpdateResult } from 'typeorm';
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
    const entity = await this.repository.findOne({ where: [{ id:id } ]});
    if (!entity) {
      throw new NotFoundException('Entité innexistant');
    }
    return entity;
  }
  async update(id: string, update): Promise<Entity> {
    const newentity = await this.repository.preload({
      id,
      ...update,
    });
    if (newentity) {
      return this.repository.save(newentity);
    }
    throw new NotFoundException('Entité innexistante');
  }
  remove(id: string): Promise<UpdateResult> {
    return this.repository.softDelete(id);
  }
  restore(id: string): Promise<UpdateResult> {
    return this.repository.restore(id);
  }
}
