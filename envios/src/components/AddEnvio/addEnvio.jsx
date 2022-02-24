import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDistance } from "geolib";
import { onAddEnvio } from "../../containers/App/actions";
import { onAgregarEnvio } from "../../services";
//import AutoComplete from "../Autocomplete/Autocomplete";
import { MenuItem, Select } from "@mui/material";
import { useHistory } from "react-router-dom";
//import { Autocomplete } from "@mui/material";

const AddEnvio = () => {

  const pesoInput = useRef();
  const userLogged = useSelector((state) => state.userLogged);
  const ciudades = useSelector((state) => state.ciudades);
  const categorias = useSelector((state) => state.categorias);

  const dispatch = useDispatch();

  const PRECIO_INITIAL=50;

  const [ciudadOrigen, setCiudadOrigen] = React.useState("");
  const [ciudadDestino, setCiudadDestino] = React.useState("");
  const [categoriaSel, setCategoria] = React.useState("");
  const [distanciaVal, setDistancia] = React.useState("");
  const [precioVal,setPrecio] = React.useState(PRECIO_INITIAL);

  const calculoPrecio = (dist, kg) => {
    return PRECIO_INITIAL+50*((dist/100).toFixed(0)) + 10*kg;
  }

  const onChangePeso =(e) => {
    const peso = e.target.value;
    setPrecio(calculoPrecio(distanciaVal, peso));
  }
  const handleChangeCateg = (e) => {
    setCategoria(e.target.value);
  };

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

    const distanciaKM=distance / 1000;
    
    setPrecio(calculoPrecio(distanciaKM, pesoInput.current.value));

    return distanciaKM;
  };


  const history = useHistory();

  const onHandleAddEnvio = async (e) => {
    e.preventDefault();

    const peso = pesoInput.current.value;
    const precio = precioVal;

    if (
      ciudadOrigen !== "" &&
      ciudadDestino !== "" &&
      peso !== "" &&
      precio !== "" &&
      origen != null &&
      destino != null
    ) {
      const envio = {
        idUsuario: userLogged.id,
        idCiudadOrigen: origen.id,
        idCiudadDestino: destino.id,
        peso: peso,
        distancia: distanciaVal, //calculate distance
        precio: precio,
        idCategoria: categoriaSel,
      };

      setDistancia(envio.distancia);

      try {
        // Enviar a la API
        const response = await onAgregarEnvio(envio, userLogged.apiKey);
        // Actualizar el store
        dispatch(onAddEnvio(response));
        
        history.push('/dashboard');

      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <form className="container-fluid row mt-4 w-100 justify-content-center">
      <div className="col-6">
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
          {ciudades!=null ? ciudades.map((ciudad, index) => (
            <MenuItem key={index} value={ciudad.id}>
              {ciudad.nombre}
            </MenuItem>
          )): <></>}
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
          {ciudades!=null ? ciudades.map((ciudad, index) => (
            <MenuItem key={index} value={ciudad.id}>
              {ciudad.nombre}
            </MenuItem>
          )) : <></>
        }
        </Select>

        <br />
        <label htmlFor="pesoInput">Peso</label>
        <br />
        <input
          type="number"
          min="0"
          className="form-control"
          id="pesoInput"
          placeholder="Peso.."
          ref={pesoInput}
          onChange={onChangePeso}
          
        />
        <label id="categLabel" htmlFor="categSelect">
          Categoria
        </label>
        <br />
        <Select
          className="form-control"
          labelId="categLabel"
          id="categSelect"
          value={categoriaSel}
          label="Categoria"
          onChange={handleChangeCateg}
        >
          {categorias!= null ? categorias.map((categ, index) => (
            <MenuItem key={index} value={categ.id}>
              {categ.nombre}
            </MenuItem>
          )) : <></>}
        </Select>
        <br />
        
        <label htmlFor="precioInput">Precio</label>
        <br />
        <input
          type="number"
          className="form-control"
          id="precioInput"
          value={precioVal}
          disabled
        />

        <br />
        <label>Distancia</label>
        <br />
        <input
          className="form-control"
          type="text"
          disabled
          value={distanciaVal}
        ></input>

        <br />
        <br />
        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={onHandleAddEnvio}
        >
          Add +
        </button>
      </div>
    </form>
  );
};

export default AddEnvio;
