/**
 * 
 * Conceptos de la POO.
 * Clases: son bocetos, moldes, etc.
 * 
 */
class Person {
  /**
   * 
   * Atributos de la clase persona.
   * 
   * ! NOTA: un atributo/propiedad de una clase, es lo mismo que una
   * ! variable.
   * 
   */
  private name: string; // Brian Castro
  private age: number;
  // private gender: string;
  // private height: number;

  /**
   * 
   * ! NOTA: el constructor da un estado inicial.
   * 
   */
  constructor(
    name: string,
    age: number,
  ) {
    this.name = name; // ""
    this.age = age;
  }

  // ! SETTERS Y GETTERS
  // GETTER: para obtener valores.
  public getName(): string {
    return this.name; // return "Brian Castro";
  }

  // SETTER: para asignar valores.
  public setName(name: string) {
    this.name = name; // "Jose Sanchez"
  }

  // public setHeight(height: number): void {
  //   this.height = height;
  // }

  // public getHeight(): number {
  //   return this.height;
  // }

  // public showAge(): string {
  //   return `${this.age} años`;
  // }

  // public walk(): string {
  //   return `La persona ${this.name} esta caminando`;
  // }

  // public eat(): string {
  //   return `La persona ${this.name} de ${this.age} años esta comiendo`;
  // }
}

// ! Instanciamiento/creacion de objeto.
// const person1 = new Person(); // Brian
// const person2 = new Person(); // Juan David

// person1.name = "Brian Castro";
// person1.age = 40;
// person1.gender = "mujer";

// person2.name = "Juan David";
// person2.age = 20;
// person2.gender = "hombre";

const brian = new Person("Brian Castro", 20);

// Que resultado va a obtener la siguiente linea.
// Opcion 1: undefined -> Alfredo, Juan David
// Opcion 2: string vacio -> Jaime, Uriel
// Opcion 3: Brian Castro -> Jose, David -> Opcion correcta
// console.log(brian.getName());

brian.setName("Pepe Jaramillo");

// Opcion 1: Brian Castro -> 
// Opcion 2: Pepe Jaramillo -> Jaime, Jose, David, Juan David
// Opcion 3: undefined -> 
console.log(brian.getName()); // -> Pepe Jaramillo

const jose = new Person("", 0);
// jose.name // ""
// jose.age // 0
jose.setName("Jose Sanchez");
// jose.name // Jose Sanchez

console.log(jose.getName());

// brian.age = 25;
// brian.name = "Brian Castro";
// brian.setHeight(70);

// console.log(brian.showAge());
// // console.log(brian.walk());
// // console.log(brian.eat());
// console.log(brian.getHeight());





