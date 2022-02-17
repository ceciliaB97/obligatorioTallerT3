import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDistance } from "geolib";
import { onAddEnvio } from "../../containers/App/actions";
import { onAgregarEnvio } from "../../services";
import AutoComplete from "../Autocomplete/Autocomplete";
//import { Autocomplete } from "@mui/material";

const AddEnvio = () => {
  const userLogged = useSelector((state) => state.userLogged);
  const ciudades = useSelector((state) => state.ciudades);
  const suggestions = ciudades.map(c=>c.nombre);
  
  console.log("suggestionsAddenvio",suggestions);

  const dispatch = useDispatch()

  const ciudadOrigenInput = useRef();
  const ciudadDestinoInput = useRef();
  const pesoInput = useRef();
  const precioInput = useRef();

  //   const _calculateDistance = () => {
  //     const distance = getDistance(
  //       {
  //         latitude: -34.764879999999998005932866362854838371276855468755,
  //         longitude: -56.36449999999999960209606797434389591217041015625,
  //       },
  //       {
  //         latitude: -34.6345900000000028740032576024532318115234375,
  //         longitude: -56.6173900000000003274180926382541656494140625,
  //       }
  //     );

  //     return distance / 1000;
  //   };

  const onHandleAddEnvio = async (e) => {
    e.preventDefault();

    const ciudadOrigen = ciudadOrigenInput.current.value;
    const ciudadDestino = ciudadDestinoInput.current.value;
    const peso = pesoInput.current.value;
    const precio = precioInput.current.value;

    if (
      ciudadOrigen !== "" &&
      ciudadDestino !== "" &&
      peso !== "" &&
      precio !== ""
    ) {

      const origen = ciudades.find(e=>e.nombre == ciudadOrigen);
      const destino = ciudades.find(e=>e.nombre == ciudadDestino);
      console.log("origen",origen);
      console.log("destino",destino);
      const envio = {
        idUsuario: userLogged.id,
        idCiudadOrigen: origen.id,
        idCiudadDestino: destino.id,
        peso: peso,
        distancia: 2.32, //calculate distance
        precio: precio,
        idCategoria: 5,
      };
     
      try {
        // Enviar a la API
        const response = await onAgregarEnvio(envio, userLogged.apiKey);
        console.log(response);
        // Actualizar el store
        dispatch(onAddEnvio(response));
      } catch (error) {
        alert(error.message);
      }
    }
  };

  /*       <input
          type="text"
          className="form-control"
          id="ciudadOrigenInput"
          placeholder="Ciudad Origen"
          ref={ciudadOrigenInput}
        />*/
  return (
    <form className="container-fluid row mt-4 w-100 justify-content-center">
      <div className="col-6">
        <label htmlFor="ciudadOrigenInput">Ciudad Origen</label>
        <br />
 
        <AutoComplete id="ciudadOrigenInput" suggestions={suggestions}
        placeholderText="Ciudad Origen"
        ref={ciudadOrigenInput} 
        ></AutoComplete>

        <label htmlFor="ciudadDestinoInput">Ciudad Destino</label>
        <br />

        <AutoComplete id="ciudadDestinoInput" suggestions={suggestions}
        placeholderText="Ciudad Destino"
        ref={ciudadDestinoInput} 
        ></AutoComplete>
        
        <label htmlFor="pesoInput">Peso</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="pesoInput"
          placeholder="Peso.."
          ref={pesoInput}
        />
        <label htmlFor="precioInput">Precio</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="precioInput"
          placeholder="Precio.."
          ref={precioInput}
        />

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

/*
<input
          type="text"
          className="form-control"
          id="ciudadDestinoInput"
          placeholder="Ciudad Destino"
          ref={ciudadDestinoInput}
        />
*/
export default AddEnvio;
