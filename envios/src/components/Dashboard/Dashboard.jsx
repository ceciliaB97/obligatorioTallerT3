// eslint-disable react-hooks/exhaustive-deps

import "./Dashboard.css";
import React, { useEffect } from "react";
import { getListaEnvios, getCategorias, getDepartamentos } from "../../services";
import ListaEnviosContent from "./ListaEnvios/ListaEnvios";
import { useDispatch, useSelector } from "react-redux";
import { onLoadEnvios, onLoadCategorias } from "../../containers/App/actions";
import GastoTotal from "./GastoTotal";
import { Box } from "@material-ui/core";
import CalcularDistancia from "./CalcularDistancia";

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
        console.log("listaEnviosGET", listaEnvios);
        dispatch(onLoadEnvios(listaEnvios.envios));

        if (sessionStorage.getItem("categData") == null) {
          const categoriasData = await getCategorias(userLogged.apiKey);
          console.log("categoriasData", categoriasData);
          sessionStorage.setItem(
            "categData",
            JSON.stringify(categoriasData.categorias)
          );
          dispatch(onLoadCategorias(categoriasData.categorias));
        }

        if (sessionStorage.getItem("depsData") == null) {
          const depsData = await getDepartamentos(userLogged);
          console.log("depsData", depsData);
          sessionStorage.setItem(
            "depsData",
            JSON.stringify(depsData.departamentos)
          );
          dispatch(onLoadCategorias(depsData.departamentos));
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className="container-fluid dashboard">
      <h1 className="d-flex justify-content-center">Dashboard</h1>
      <br />
      <div className="row">
        <Box
          className="col-3 p-3 text-center m-2"
          component="span"
          sx={{ p: 2, border: "1px solid grey", borderRadius: "5%"}}
        >
          <GastoTotal envios={envios} />
        </Box>
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <ListaEnviosContent listaEnvios={envios} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      <Box
          className="col-3 p-3 text-center m-2"
          component="span"
          sx={{ p: 2, border: "1px solid grey", borderRadius: "5%"}}
        >
          <CalcularDistancia ciudades={ciudades} />
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
