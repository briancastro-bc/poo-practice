import { Database, } from './database';
import { Authentication, } from './authentication';

function main(): void {
  const database = new Database();
  const authentication = new Authentication(database);

  const simulatedUser = {
    username: 'brian',
    password: '12345',
  };

  authentication.signUp(simulatedUser);
  // Opcion 1: true -> Jaime, Jose
  // Opcion 2: false -> Tomas, David
  const signedIn = authentication.signIn(
    simulatedUser.username, // username = 'brian'
    '12345' // password = '12345';
  );

  console.log('resultado del sign in', signedIn);

  if (!signedIn) {
    console.log('El usuario no pudo iniciar sesion');
    return;
  }

  console.log('El usuario inicio sesion');
}

main();