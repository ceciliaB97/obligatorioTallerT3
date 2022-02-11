import React from "react";

const ListaEnviosItem = ({
  id,
  ciudad_origen,
  ciudad_destino,
  peso,
  distancia,
  precio,
}) => {

  // const data = {
  //   ...userLogged, ciudad_origen, ciudad_destino
  // };

  // const [ciudadOrigen, setCiudadOrigen] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const ciudadOrigen = await getCiudadOrigen(data);
  //       setCiudadOrigen(ciudadOrigen.ciudades.nombre);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   })();
  //   // eslint-disable-next-line
  // }, []);

  // const [ciudadDestino, setciudadDestino] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const ciudadDestino = await getciudadDestino(data);
  //       setListaEnvios(ciudadDestino.ciudades.nombre);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   })();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{ciudad_origen}</td>
      <td>{ciudad_destino}</td>
      <td>{peso}kg</td>
      <td>{distancia}mts</td>
      <td>${precio}</td>
    </tr>
  );
};

export default ListaEnviosItem;
