import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddEnvio } from "../../containers/App/actions";
import { onAgregarEnvio } from "../../../../services";
import { getDistance } from "geolib";

const addEnvio = () => {
  const userLogged = useSelector((state) => state.userLogged);
  const ciudades = useSelector((state) => state.ciudades);
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
      const envio = {
        idUsuario: userLogged.id,
        idCiudadOrigen: ciudadOrigen,
        idCiudadDestino: ciudadDestino,
        peso: peso,
        distancia: 2.32, //calculate distance
        precio: precio,
        idCategoria: 5,
      };
      try {
        // Enviar a la API
        const response = await onAgregarEnvio(envio, userLogged);
        console.log(response);
        // Actualizar el store
        dispatch(onAddEnvio(response));
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <form>
      <div className="col">
        <label for="ciudadOrigenInput">Ciudad Origen</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="ciudadOrigenInput"
          placeholder="Add todo.."
          ref={ciudadOrigenInput}
        />
        <label for="ciudadDestinoInput">Ciudad Destino</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="ciudadDestinoInput"
          placeholder="Add todo.."
          ref={ciudadDestinoInput}
        />
        <label for="pesoInput">Peso</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="pesoInput"
          placeholder="Add todo.."
          ref={pesoInput}
        />
        <label for="precioInput">Precio</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="precioInput"
          placeholder="Add todo.."
          ref={precioInput}
        />
      </div>
      <div className="col-auto">
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

export default addEnvio;
