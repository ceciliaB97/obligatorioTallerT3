// eslint-disable react-hooks/exhaustive-deps

import "./Dashboard.css";
import React, { useEffect } from "react";
import {
  getListaEnvios,
  getCategorias,
  getDepartamentos,
} from "../../services";
import ListaEnviosContent from "./ListaEnvios/ListaEnvios";
import { useDispatch, useSelector } from "react-redux";
import {
  onLoadEnvios,
  onLoadCategorias,
  onLoadDepartamentos,
} from "../../containers/App/actions";
import GastoTotal from "./GastoTotal";
import CalcularDistancia from "./CalcularDistancia";
import TopDep from "./TopDep/TopDep";

const Dashboard = () => {
  const envios = useSelector((state) => state.envios);
  //const categorias = useSelector((state) => state.categorias); //pasar a otro componente
  const userLogged = useSelector((state) => state.userLogged);
  const ciudades = useSelector((state) => state.ciudades);
  const departamentos = useSelector((state) => state.departamentos);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const listaEnvios = await getListaEnvios(userLogged);
        dispatch(onLoadEnvios(listaEnvios.envios));

        sessionStorage.setItem(
          "enviosData",
          JSON.stringify(listaEnvios.envios)
        );

        if (sessionStorage.getItem("categData") == null) {
          const categoriasData = await getCategorias(userLogged.apiKey);
          sessionStorage.setItem(
            "categData",
            JSON.stringify(categoriasData.categorias)
          );
          dispatch(onLoadCategorias(categoriasData.categorias));
        }

        if (sessionStorage.getItem("depsData") == null) {
          const depsData = await getDepartamentos(userLogged);
          sessionStorage.setItem(
            "depsData",
            JSON.stringify(depsData.departamentos)
          );
          dispatch(onLoadDepartamentos(depsData.departamentos));
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    // <div className="container-fluid dashboard">
    <>
      {/* <h1 className="d-flex justify-content-center">Dashboard</h1> */}
      <div className="parent">
        <div className="div1 text-center">
          <GastoTotal envios={envios} />
        </div>
        <div className="div2 text-center">
          <CalcularDistancia ciudades={ciudades} />
        </div>
        <div className="div3 text-center">
          <TopDep
            departamentos={departamentos}
            envios={envios}
            ciudades={ciudades}
          />
        </div>
        <div className="div4 text-center">
          <ListaEnviosContent listaEnvios={envios} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
