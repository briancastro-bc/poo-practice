import { User } from "./user";

export class Database {
  private users: Array<User>;
  // [{
  //   username: 'Pepe',
  //   password: '1234',
  // }]

  constructor() {
    this.users = [];
  }

  add(user: User): void {
    this.users.push(user);
  }

  // username = 'brian';
  get(username: string): User | undefined {
    return this.users.find(user => user.username === username); // undefined
  }

  delete(username: string): void {
    const index = this.users.findIndex(user => user.username === username);
    this.users.splice(index, 1);
  }
}