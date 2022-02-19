import React from "react";
import ChartCategorias from "./ChartCategorias";
import ChartEnvios from "./ChartEnvios";

const Charts = () => {
  return (
    <>
      <div className="m-3">
        <ChartEnvios />
      </div>
      <div className="m-3">
        <ChartCategorias />
      </div>
    </>
  );
};

export default Charts;
