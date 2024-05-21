import { Animal, } from './animal';

/**
 * 
 * Herencia: traer las propiedades/caracteristicas y funciones
 * de una clase Padre (Parent).
 * 
 */
class Eagle extends Animal {
  public fly(): void {
    console.log('El aguila vuela');
  }

  public eat(): void {
    console.log('Come con ayuda de sus garras y volando');
  }
}

const eagle = new Eagle();
eagle.eat();