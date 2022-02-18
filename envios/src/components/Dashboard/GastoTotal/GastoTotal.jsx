import React from "react";
import { useSelector } from "react-redux";

const GastoTotal = ({ envios }) => {
  try {
    return (
      <>
        <h6>Gasto Total de Envios</h6>
        <span>
          ${envios.reduce((total, sigEnvio) => total.precio + sigEnvio.precio)}
        </span>
      </>
    );
  } catch (error) {
    console.log(error);
    return <></>;
  }
};

export default GastoTotal;
