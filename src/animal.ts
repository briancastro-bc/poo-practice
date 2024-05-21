/**
 * 
 * Convencion: por convencion las clases inician con letra mayuscula,
 * es decir que utilizan UpperCase.
 * 
 * ! ABSTRACCION
 * 
 */
export abstract class Animal {
  public color: string;
  public weight: number;
  public height: number;
  
  // Respirar
  public breathe(): void {
    console.log('El animal, respira por los pulmones');
  }

  // Abstraccion
  public abstract eat(): void;

  // Dormir
  public sleep(): void {
    console.log('El animal, duerme');
  }
}
