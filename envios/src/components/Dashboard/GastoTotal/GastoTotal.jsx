import React from "react";
import { useSelector } from "react-redux";

const GastoTotal = ({ envios }) => {
  let totalEnvios = 0;

  try {
    
    if (envios != null) {
      envios.forEach(element => {
        totalEnvios += element.precio;
      });

      totalEnvios = totalEnvios.toFixed(2);
    }

    return (
      <>
        <h6>Gasto Total de Envios</h6>
        <span>$ {totalEnvios}</span>
      </>
    );
  } catch (error) {
    console.log(error);
    return <></>;
  }
};

export default GastoTotal;
