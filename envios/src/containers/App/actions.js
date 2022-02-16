import {
  ON_USER_LOGGED,
  ON_LOAD_ENVIOS,
  ON_LOAD_CATEGORIAS,
  ON_ADD_ENVIO,
  ON_DELETE_ENVIO,
  ON_LOG_OUT,
} from "./constants";

const onUserLogged = (payload) => {
  return {
    type: ON_USER_LOGGED,
    payload: payload,
  };
};

const onLoadEnvios = (envios) => {
  return { type: ON_LOAD_ENVIOS, payload: envios };
};

const onLoadCategorias = (categorias) => {
  return { type: ON_LOAD_CATEGORIAS, payload: categorias };
};

const onAddEnvio = (envio) => {
  return { type: ON_ADD_ENVIO, payload: envio };
};

const onDeleteEnvio = (envioId) => {
  return {
    type: ON_DELETE_ENVIO,
    payload: {
      id: envioId,
    },
  };
};

const onLogout = () => {
  return {
    type: ON_LOG_OUT,
  };
};

export { onUserLogged, onLoadEnvios, onAddEnvio, onDeleteEnvio, onLogout, onLoadCategorias };
