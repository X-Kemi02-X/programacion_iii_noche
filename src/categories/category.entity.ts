import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Categories')
export class Category{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
