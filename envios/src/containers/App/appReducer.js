import {
  ON_USER_LOGGED,
  ON_LOAD_ENVIOS,
  ON_LOAD_CATEGORIAS,
  ON_ADD_ENVIO,
  ON_LOAD_CIUDAD,
  ON_DELETE_ENVIO,
  ON_LOG_OUT,
  ON_LOAD_CIUDADES,
} from "./constants";

const localData = sessionStorage.getItem("loggedUser");
const categData = sessionStorage.getItem("categData");
const ciudadesData = sessionStorage.getItem("ciudadesData");

const userLogged = localData ? JSON.parse(localData) : null;
console.log("categData",categData);


let categ = [];
let ciudades = [];
try {
categ = categData && categData!=null && categData!=undefined ? JSON.parse(categData) : [];
ciudades = categData && ciudadesData!=null ? JSON.parse(ciudadesData) : [];
}
catch(e) {
 //TODO: POR QUE REVIENTA ? 
 // alert("ERROR AL CARGAR LOS DATOS LA API REVENTO!!!")
}

const initialState = {
  userLogged: userLogged,
  envios: [],
  categorias: categ,
  ciudades: ciudades,
  ciudad: ""
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ON_USER_LOGGED:
      return { ...state, userLogged: payload };
    case ON_LOAD_ENVIOS:
      return { ...state, envios: payload };
    case ON_LOAD_CATEGORIAS:
      return { ...state, categorias: payload };
    case ON_LOAD_CIUDAD:
      return { ...state, ciudad: payload };
    case ON_LOAD_CIUDADES:
      return { ...state, ciudades: payload };
    case ON_ADD_ENVIO:
      return { ...state, envios: [...state.envios, payload] };
    case ON_DELETE_ENVIO:
      const newEnviosList = state.envios.filter(
        (todo) => todo.id !== payload.id
      );
      return { ...state, envios: newEnviosList };
    case ON_LOG_OUT:
      return { ...state, userLogged: null };
    default:
      return state;
  }
};

export default appReducer;
