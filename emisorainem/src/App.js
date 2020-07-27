import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Nombres</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Correo</th>
      <th scope="col">Celular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Santiago Aaron Tadeo</td>
      <td>Cubillos Alvarez</td>
      <td>santiagocubillos@inemjose.edu.co</td>
      <td>305 303 2451</td>
    </tr>
    <tr>
      <td>Samuel </td>
      <td>Quirama Pino</td>
      <td>samuelquirama@inemjose.edu.co </td>
      <td>305 3015831</td>
    </tr>
    <tr>
      <td>Jean Paul</td>
      <td>Restrepo Ramirez</td>
      <td>jeanpaulresporam@gmail.com </td>
      <td>300 2520199</td>
    </tr>
    <tr>
      <td>Juan Camilo</td>
      <td>Cifuentes Muñoz </td>
      <td>cifuentesmunoz1@gmail.com </td>
      <td>305 4037078</td>
    </tr>
  </tbody>
</table>

    </div>
  );
}

export default App;
