import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onDeleteEnvio, onLoadCiudad } from "../../../../containers/App/actions";
import { onEliminarEnvio, getCiudad } from "../../../../services";

const ListaEnviosItem = ({
  id,
  ciudad_origen,
  ciudad_destino,
  peso,
  distancia,
  precio,
}) => {
  const userLogged = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();

  const onHandleDelete = async () => {
    try {
      await onEliminarEnvio(id, userLogged.apiKey);
      dispatch(onDeleteEnvio(id));
    } catch (error) {
      alert(error.message);
    }
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const ciudadOrigen = await getCiudad(ciudad_origen, userLogged.apiKEy);
  //       console.log('ciudad Origen',ciudadOrigen);
  //       dispatch(onLoadCiudad(ciudadOrigen.ciudades.nombre));

  //       const ciudadDestino = await getCiudad(ciudad_destino, userLogged.apiKey);
  //       console.log('ciudad Desitno',ciudadDestino);
  //       dispatch(onLoadCiudad(ciudadOrigen.ciudades.nombre));
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   })();
  // }, []);

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
