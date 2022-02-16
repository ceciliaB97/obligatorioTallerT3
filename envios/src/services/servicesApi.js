const BASE_URL = "https://envios.develotion.com";

const onLogin = (data) => {
  return fetch(`${BASE_URL}/login.php`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else
        return Promise.reject({
          message: "Ha occurrido un error al hacer login",
          status: response.status,
        });
    })
    .catch((e) => {
      return {
        message: e.message,
      };
    });
};

const onRegister = (data) => {
  return fetch(`${BASE_URL}/usuarios.php`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else
        return Promise.reject({
          message: "Ha occurrido un error al hacer el registro",
          status: response.status,
        });
    })
    .catch((e) => {
      return {
        message: e.message,
      };
    });
};

//obtener la lista de todos los envios para un usuario
const getListaEnvios = (data) => {
  return fetch(`${BASE_URL}/envios.php?idUsuario=${data.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "apiKey": `${data.apiKey}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else
        return Promise.reject({
          message: "Ha occurrido un error al traer los envíos",
          status: response.status,
        });
    })
    .catch((e) => {
      return {
        message: e.message,
      };
    });
};

//Agregar un nuevo envio
const onAgregarEnvio = ( {dataEnvio,apiKey}) => {
  return fetch(`${BASE_URL}/envios.php`, {
    method: "POST",
    body: JSON.stringify(dataEnvio),
    headers: {
      "Content-Type": "application/json",
      "apiKey": `${apiKey}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json(); /*{ "idEnvio": _,"mensaje": "_", "codigo": _}*/ 
      } else
        return Promise.reject({
          message: "Ha occurrido un error al traer los envíos",
          status: response.status,
        });
    })
    .catch((e) => {
      return {
        message: e.message,
      };
    });
};

//Eliminar un envio existente
const onEliminarEnvio = ( {dataEnvio,apiKey}) => {
  return fetch(`${BASE_URL}/envios.php`, {
    method: "DELETE",
    body: JSON.stringify(dataEnvio),
    headers: {
      "Content-Type": "application/json",
      "apiKey": `${apiKey}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json(); /*{
          "idEnvio": 10,
          "codigo": 200,
          "mensaje": "Envío eliminado con éxito"
      }*/ 
      } else
        return Promise.reject({
          message: "Ha occurrido un error al tratar de eliminar el envio",
          status: response.status,
        });
    })
    .catch((e) => {
      return {
        message: e.message,
      };
    });
};


//data = { ciudadOrigen, apiKey }

const getCiudadOrigen = ({ciudadOrigen,apiKey}) => {
  return fetch(`${BASE_URL}/ciudades.php?idDepartamento=${ciudadOrigen}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "apiKey": `${apiKey}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else
        return Promise.reject({
          message: "Ha occurrido un error al traer los envíos",
          status: response.status,
        });
    })
    .catch((e) => {
      return {
        message: e.message,
      };
    });
}


//obtener la lista de todas las categorias
const getCategorias = (apiKey) => {
  return fetch(`${BASE_URL}/categorias.php`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "apiKey": `${apiKey}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else
        return Promise.reject({
          message: "Ha occurrido un error al traer las categorias",
          status: response.status,
        });
    })
    .catch((e) => {
      return {
        message: e.message,
      };
    });
};

//obtener la lista de todas las categorias
const getDepartamentos = (apiKey) => {
  return fetch(`${BASE_URL}/departamentos.php`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "apiKey": `${apiKey}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else
        return Promise.reject({
          message: "Ha occurrido un error al traer las categorias",
          status: response.status,
        });
    })
    .catch((e) => {
      return {
        message: e.message,
      };
    });
};

export { onLogin, onRegister,onAgregarEnvio,getCategorias, getListaEnvios, getCiudadOrigen, onEliminarEnvio, getDepartamentos };