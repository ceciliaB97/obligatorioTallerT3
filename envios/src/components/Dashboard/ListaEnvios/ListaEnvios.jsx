import React from "react";
import ListaEnviosItem from "./ListaItems";

const ListaEnviosContent = ({ listaEnvios }) => {
  console.log("envios", listaEnvios.envios);

  // listaEnvios = [{ id: 1,
  //   ciudad_origen: "montevideo",
  //   ciudad_destino: "paysandu",
  //   peso: 52,
  //   distancia: 100,
  //   precio: 520}, { id: 1,
  //     ciudad_origen: "montevideo",
  //     ciudad_destino: "paysandu",
  //     peso: 52,
  //     distancia: 100,
  //     precio: 520}];
  //id, ciudad_origen, ciudad_destino, peso, distancia, precio
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Origen</th>
          <th scope="col">Destino</th>
          <th scope="col">Peso</th>
          <th scope="col">Distancia</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {listaEnvios.map((listaEnvios, index) => (
          <ListaEnviosItem {...listaEnvios} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default ListaEnviosContent;
