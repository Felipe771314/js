const axios = require('axios');
const login = async () => {
    try {
const response = await  axios.post('https://reqres.in/api/login', {
email: 'eve.holt@reqres.in',
password: 'cityslicka' //si sacamos password da un 400
});

console.log(response.data);
    } catch(error) {
        console.log('Hubo un error y fue', error );  //message: "Missing password"
    }
};

login();