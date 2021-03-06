import React from "react";
import ListaEnviosItem from "./ListaItems";
import { onLoadCiudades } from "../../../containers/App/actions";
import { getAllCiudades } from "../../../services";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ListaEnviosContent = ({ listaEnvios }) => {
  const userLogged = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const checkSession = sessionStorage.getItem("ciudadesData");
        if (checkSession ==undefined) {
          const allCiudades = await getAllCiudades(userLogged);
          sessionStorage.setItem(
            "ciudadesData",
            JSON.stringify(allCiudades.ciudades)
          );

          dispatch(onLoadCiudades(allCiudades.ciudades));
        }
        
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
    <h4><strong>Lista de Envios</strong></h4>
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
    </>
  );
};

export default ListaEnviosContent;
