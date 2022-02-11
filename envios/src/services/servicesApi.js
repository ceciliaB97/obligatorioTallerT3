const BASE_URL = "https://envios.develotion.com";

const onLogin = (data) => {
  fetch(`${BASE_URL}/login.php`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.json());
        return response.json();
      }
      // else
      //   return {
      //     message: "Ha occurrido un error al hacer login",
      //     status: response.status,
      //   };
    })
    .then((result) => {
      console.log("success", result);
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
