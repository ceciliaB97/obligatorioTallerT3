const BASE_URL=//'https://beeceptor.com/console/todo-list-app';
"https://todo-list-app.free.beeceptor.com";

const onLogin = (data) => {
  fetch(`${BASE_URL}/login`, {
    method: "POST", 
    data:  JSON.stringify(data, null, 4),
    headers: {
      "Content-Type" : "application/json"
    }
  }).then((response) => {
    if (response.status===200) {
      return response.json();
    }
    else 
      return  {
        message: "Ha occurrido un error al hacer login",
        status: response.status
      }
    }
  ).catch((e)=> {
    return {
      message: e.message
    }
  });

};

const onRegister = () => {
  alert("hola soy la api register");
};

export { onLogin, onRegister };
