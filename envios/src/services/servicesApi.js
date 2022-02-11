const BASE_URL = "https://envios.develotion.com";

let onLogin = ( data) => {
 return fetch(`${BASE_URL}/login.php`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then( response => {
      if (response.status === 200) {        
       return response.json();
      }
       else
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

const onRegister = () => {
  alert("hola soy la api register");
};

export { onLogin, onRegister };
