import "./Dashboard.css";
import React, { useEffect } from "react";
import { getListaEnvios, getCategorias } from "../../services";
import ListaEnviosContent from "./ListaEnvios/ListaEnvios";
import { useDispatch, useSelector } from "react-redux";
import { onLoadEnvios, onLoadCategorias } from "../../containers/App/actions";

const Dashboard = () => {
  const userLogged = useSelector((state) => state.userLogged);

  if (userLogged ===null || !userLogged.apiKey) {
    
  }

  const envios = useSelector((state) => state.envios);
  const categorias = useSelector((state) => state.categorias); //pasar a otro componente
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const listaEnvios = await getListaEnvios(userLogged);
        console.log('listaEnviosGET',listaEnvios);
        dispatch(onLoadEnvios(listaEnvios.envios));

        const categoriasData = await getCategorias(userLogged.apiKey);
        console.log('categoriasData',categoriasData);
        dispatch(onLoadCategorias(categoriasData.categorias));
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
        <div className="col-3">Aca navbar con routing</div>
        <div className="col-9">
          <div className="row">
            <div className="col-12">
              <ListaEnviosContent listaEnvios={envios} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
