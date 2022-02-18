import React, { useState } from 'react';

import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux';

const Charts = (props) => {


  const envios = useSelector((state) => state.envios);
  const ciudades = useSelector((state) => state.ciudades);
  const departamentos = useSelector((state) => state.departamentos);


  let values = [];
  let keys = [];
  ciudades.forEach(ciudad => {
    const cantEnviosCiudad = envios.filter(e=>e.ciudad_origen == ciudad.id).length;
    if (cantEnviosCiudad > 0) {
      //axis y valores, cantEnviosxCiudad
      values.push(cantEnviosCiudad);
      const depEnCiudad = departamentos.find(e=>e.id == ciudad.id_departamento) || {nombre:''};
      // axis X claves, ciudad / departamento
      keys.push(`${ciudad.nombre}/${depEnCiudad.nombre}`);
    }

  });
  
          const [state,setState] = useState({
            series: [{
              name:"Envios",
              data: values
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: keys
              }
            },
          });

return (
  <>
  <br/>
  <h4>Cantidad de Envios Por Ciudad</h4>
  <Chart options={state.options} series={state.series} type="bar" height={350} />
  </>
)
}
        
export default Charts;