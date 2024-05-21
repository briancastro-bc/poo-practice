import { User } from "./user";
import { Database } from "./database";

export class Authentication {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  signIn(
    username: string, 
    password: string
  ): boolean {
    const existingUser = this.database.get(username);
    if (!existingUser) {
      throw new Error('El usuario no esta creado');
    }

    if (existingUser.password === password && existingUser.username === username) {
      return true;
    }

    return false;
  }

  signUp(user: User): User {
    const existingUser = this.database.get(user.username);

    if (existingUser) {
      throw new Error('El usuario ya existe');
    }

    if (!user.username) {
      throw new Error('No me esta trayendo ningun usuario');
    }

    if (!user.password) {
      throw new Error('No existe la contraseña');
    }

    const newUser: User = {
      username: user.username,
      password: user.password,
    }

    this.database.add(newUser);

    return newUser;
  }
}