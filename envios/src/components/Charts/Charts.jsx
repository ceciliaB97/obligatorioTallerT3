import React, { useState } from 'react';

import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux';

const Charts = (props) => {


  const envios = useSelector((state) => state.envios);
  const ciudades = useSelector((state) => state.ciudades);
  const departamentos = useSelector((state) => state.departamentos);


  //const dataCiudades = ciudades.map(c=> c.nombre);

  let dict = {};
  let values = [];
  let keys = [];
  ciudades.forEach(ciudad => {
    const cantEnviosCiudad = envios.filter(e=>e.ciudad_origen == ciudad.id).length;
    if (cantEnviosCiudad > 0) {
      values.push(cantEnviosCiudad);
      const depEnCiudad = departamentos.find(e=>e.id == ciudad.id_departamento) || {nombre:''};
      keys.push(`${ciudad.nombre}/${depEnCiudad.nombre}`);
      dict[ciudad.nombre] = cantEnviosCiudad;
    }

  });

  // for (let index = 0; index < dataCiudades.length; index++) {
  //   const ciudad = dataCiudades[index];

   
  // }

  
          const [state,setState] = useState({
            series: [{
              name:"Envios",
              data: values
              // [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
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
                // ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                //   'United States', 'China', 'Germany'
                // ],
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