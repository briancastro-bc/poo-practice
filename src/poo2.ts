// class Figura {
//   public x: number;
//   public y: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }

// const cuadrado = new Figura(20, 20);
// console.log('Estado inicial del cuadrado', cuadrado);

// const rectangulo = new Figura(60, 20);
// console.log('Estado inicial del rectangulo', rectangulo);
class Carro {
  public llantas: number;
  public puertas: number;

  constructor(puertas: number) {
    this.llantas = 4;
    this.puertas = puertas;
  }
}

const carroDeportivo = new Carro(2);
// carroDeportivo.llantas = 4
// carroDeportivo.puertas = 2

const carroFamiliar = new Carro(4);
// carroFamiliar.llantas = 4
// carroFamiliar.puertas = 4
