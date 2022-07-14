import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../interfaces/user.interface";
import { UserRolesEnum } from "../constants/user-roles.enum";

@Entity({ name: 'users' })
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @Column({ default: false })
  public isRegisteredWithGoogle: boolean;

  @Column({ nullable: true })
  public refreshToken: string;

  //TODO delete default
  @Column({default: ""})
  public avatar: string;

  @Column({
    type: "real",
    default: 0,
  })
  public balance: number;

  //TODO delete default
  @Column({default: ""})
  public deposits: string;

  //TODO delete default
  @Column({default: ""})
  public favouriteItems: string

  //TODO delete default
  @Column({default: ""})
  public history: string

  //TODO delete default
  @Column({default: ""})
  public reviews: string;

  @Column({
    type: "enum",
    enum: UserRolesEnum,
    default: UserRolesEnum.USER,
  })
  public role: UserRolesEnum;

  @CreateDateColumn()
  public created_at: Date;
}