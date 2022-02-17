import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onDeleteEnvio } from "../../../../containers/App/actions";
import { onEliminarEnvio } from "../../../../services";

const ListaEnviosItem = ({
  id,
  ciudad_origen,
  ciudad_destino,
  peso,
  distancia,
  precio,
}) => {
  const userLogged = useSelector((state) => state.userLogged);
  const ciudades = useSelector((state) => state.ciudades);
  const dispatch = useDispatch();

  const onHandleDelete = async () => {
    try {
      const res = await onEliminarEnvio({ idEnvio: id }, userLogged.apiKey);
      console.log("delete envio", res);
      //TODO: Agregar validacion de statusCode

      dispatch(onDeleteEnvio(id));
    } catch (error) {
      alert(error.message);
    }
  };

  // console.log(ciudades.find(ciudad => ciudad.id === ciudad_origen).nombre);
  // console.log(ciudades.find(ciudad => ciudad.id === ciudad_destino).nombre);


  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{ciudad_origen}</td>
      <td>{ciudad_destino}</td>
      <td>{peso}kg</td>
      <td>{distancia}mts</td>
      <td>${precio}</td>
      <td>
        <button className="btn btn-danger" onClick={onHandleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListaEnviosItem;
