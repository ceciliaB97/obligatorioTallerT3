import React from "react";
import ListaEnviosItem from "./ListaItems";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLoadCiudades, onUserLogged } from "../../../containers/App/actions";
import { getAllCiudades } from "../../../services";

const ListaEnviosContent = ({ listaEnvios }) => {
  const userLogged = useSelector((state) => state.userLogged);
  const ciudades = useSelector((state) => state.ciudades);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
      //  console.log("userLogged",userLogged);
        const allCiudades = await getAllCiudades(userLogged);
        //console.log("ciudades", allCiudades);

        dispatch(onLoadCiudades(allCiudades.ciudades));

      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  //console.log(ciudades);

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
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {listaEnvios != null ? (
          listaEnvios.map((listaEnvios, index) => (
            <ListaEnviosItem {...listaEnvios} key={index} />
          ))
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
};

export default ListaEnviosContent;
