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
        return {
          message: "Ha occurrido un error al hacer login",
          status: response.status,
        };
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
        return {
          message: "Ha occurrido un error al hacer el registro",
          status: response.status,
        };
    })
    .catch((e) => {
      return {
        message: e.message,
      };
    });
};

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
        return {
          message: "Ha occurrido un error al traer los envíos",
          status: response.status,
        };
    })
    .catch((e) => {
      return {
        message: e.message,
      };
    });
};

export { onLogin, onRegister, getListaEnvios };
