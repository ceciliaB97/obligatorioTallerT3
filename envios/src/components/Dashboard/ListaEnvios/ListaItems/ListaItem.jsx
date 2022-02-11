import React from "react";

const ListaEnviosItem = ({ id, ciudad_origen, ciudad_destino, peso, distancia, precio }) => {
    return (
      <tr>
        <th scope='row'>{id}</th>
        <td>{ciudad_origen}</td>
        <td>{ciudad_destino}</td>
        <td>{peso}kg</td>
        <td>{distancia}mts</td>
        <td>${precio}</td>
      </tr>
    )
  }
  
  export default ListaEnviosItem;