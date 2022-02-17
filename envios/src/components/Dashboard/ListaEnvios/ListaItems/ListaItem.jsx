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

  const ciudadOrigen = ciudades.find((ciudad) => ciudad.id === ciudad_origen);
  const ciudadDestino = ciudades.find((ciudad) => ciudad.id === ciudad_destino);
  if (
    ciudadOrigen != null &&
    ciudadDestino != null
  ) {
    // ciudades not null

    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{ciudadOrigen.nombre}</td>
        <td>
          {ciudadDestino.nombre}
        </td>
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
  }
  else {
    return <></>
  }
};

export default ListaEnviosItem;
