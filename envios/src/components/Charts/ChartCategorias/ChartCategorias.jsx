import React from "react";

import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const ChartCategorias = () => {
  const envios = useSelector((state) => state.envios);
  const categorias = useSelector((state) => state.categorias);

  console.log(
    "envios en CHART CATE",
    envios,
    "categorias en CHART CATE",
    categorias
  );

  let values = [];
  let keys = [];

  categorias.forEach((categoria) => {
    const cantEnviosCategorias = envios.filter(
      (envio) => categoria.id === envio.id_categoria
    ).length;

    console.log(cantEnviosCategorias);

    if (cantEnviosCategorias > 0) {
      //axis y valores, cantEnviosxCategorias
      values.push(cantEnviosCategorias);
      // axis X claves, nombre de categoria
      keys.push(categoria.nombre);
    }
  });

  console.log("values", values, "keys", keys);

  const state = {
    series: [
      {
        name: "Envios",
        data: values,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: keys,
      },
      colors: ["#F44336", "#E91E63", "#9C27B0"],
    },
  };

  return (
    <>
      <br />
      <h4>Cantidad de Envios Por Categoria</h4>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </>
  );
};

export default ChartCategorias;
