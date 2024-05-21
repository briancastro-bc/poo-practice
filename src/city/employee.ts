import { Person } from './person';

class Employee extends Person {
  name: string;

  age: number;

  gender: string;

  dni: string;

  salary: number;

  constructor(
    name: string,
    dni: string,
    salary: number,
  ) {
    super(); // Para llamar al constructor de la clase que estamos heredando
    this.name = name;
    this.dni = dni;
    this.salary = salary;
  }

  walk(): void {
    throw new Error('Method not implemented.');
  }

  eat(): void {
    throw new Error('Method not implemented.');
  }

  listening(): void {
    throw new Error('Method not implemented.');
  }

  sleep(): void {
    throw new Error('Method not implemented.');
  }

  earnSalary(): void {
    this.salary += 200;
    console.log(`El empleado ${this.name} gana un sueldo de ${this.salary}`);
  }
}

// const employee = new Employee();

// employee.earnSalary();
// employee.earnSalary();