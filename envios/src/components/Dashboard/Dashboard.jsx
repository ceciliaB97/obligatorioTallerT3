import "./Dashboard.css";
import React, { useEffect, useState } from "react";
import { getListaEnvios,getCategorias } from "../../services";
import ListaEnviosContent from "./ListaEnvios/ListaEnvios";

const Dashboard = ({ userLogged }) => {
  const [listaEnvios, setListaEnvios] = useState([]);
  const [listaCateg, setListaCategorias] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const listaEnvios = await getListaEnvios(userLogged);
        setListaEnvios(listaEnvios.envios);

        const categoriasData = await getCategorias(userLogged.apiKey);
        setListaCategorias(categoriasData.categorias);
        

      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  console.log("Categorias2", listaCateg);
  
  return (
    <div className="container-fluid dashboard">
      <h1 className="d-flex justify-content-center">Dashboard</h1>
      <br />
      <div className="row">
        <div className="col-3">Aca navbar con routing</div>
        <div className="col-9">
          <div className="row">
            <div className="col-12">
              <ListaEnviosContent listaEnvios={listaEnvios} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
