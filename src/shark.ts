import { Animal } from './animal';

/**
 * 
 * Herencia
 * 
 */
class Shark extends Animal {
  /**
   * Polimorfismo
   */
  public override breathe(): void {
    console.log('El animal respira por los branquias');
  }

  /**
   * Abstraccion
   */
  public eat(): void {
    console.log('El tiburon come con sus dientes en el agua');
  }
}

const shark = new Shark();
shark.eat();