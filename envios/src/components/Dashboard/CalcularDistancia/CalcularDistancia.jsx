import React from "react";
import { getDistance } from "geolib";
import { MenuItem, Select } from "@mui/material";

const CalcularDistancia = ({ ciudades }) => {
  const [ciudadOrigen, setCiudadOrigen] = React.useState("");
  const [ciudadDestino, setCiudadDestino] = React.useState("");
  const [distanciaVal, setDistancia] = React.useState("");

  const [origen, setOrigen] = React.useState(null);
  const [destino, setDestino] = React.useState(null);

  const handleChangeCiudadOrigen = (e) => {
    setCiudadOrigen(e.target.value);
    const origObj = ciudades.find((ciudad) => ciudad.id === e.target.value);
    setOrigen(origObj);

    if (origObj != null && destino != null) {
      const dist = _calcularDistanciaCiudades(origObj, destino);
      setDistancia(dist);
    }
  };

  const handleChangeCiudadDestino = (e) => {
    setCiudadDestino(e.target.value);
    const destObj = ciudades.find((ciudad) => ciudad.id === e.target.value);
    setDestino(destObj);

    if (origen != null && destObj != null) {
      const dist = _calcularDistanciaCiudades(origen, destObj);
      setDistancia(dist);
    }
  };

  const _calcularDistanciaCiudades = (ciudad1, ciudad2) => {
    const distance = getDistance(
      {
        latitude: ciudad1.latitud,
        longitude: ciudad1.longitud,
      },
      {
        latitude: ciudad2.latitud,
        longitude: ciudad2.longitud,
      }
    );

    const distanciaKM = distance / 1000;

    return distanciaKM;
  };

  return (
    <div className="col-12">
        <h6>Calcular Distancia</h6>
      <label id="ciudadOrigenLabel" htmlFor="ciudadOrigenSelect">
        Ciudad Origen
      </label>
      <br />
      <Select
        className="form-control"
        labelId="ciudadOrigenLabel"
        id="ciudadOrigenSelect"
        value={ciudadOrigen}
        label="Ciudad Origen"
        onChange={handleChangeCiudadOrigen}
      >
        {ciudades != null ? (
          ciudades.map((ciudad, index) => (
            <MenuItem key={index} value={ciudad.id}>
              {ciudad.nombre}
            </MenuItem>
          ))
        ) : (
          <></>
        )}
      </Select>

      <br />
      <label id="ciudadDestinoLabel" htmlFor="ciudadDestinoSelect">
        Ciudad Destino
      </label>
      <br />
      <Select
        className="form-control"
        labelId="ciudadDestinoLabel"
        id="ciudadDestinoSelect"
        value={ciudadDestino}
        label="Ciudad Destino"
        onChange={handleChangeCiudadDestino}
      >
        {ciudades != null ? (
          ciudades.map((ciudad, index) => (
            <MenuItem key={index} value={ciudad.id}>
              {ciudad.nombre}
            </MenuItem>
          ))
        ) : (
          <></>
        )}
      </Select>

      <br />
      <label>Distancia</label>
      <br />
      <input
        className="form-control text-center"
        type="text"
        disabled
        value={distanciaVal}
      ></input>
    </div>
  );
};

export default CalcularDistancia;
