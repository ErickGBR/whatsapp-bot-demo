import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "users" })
export class User extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  phone!: string;
}
