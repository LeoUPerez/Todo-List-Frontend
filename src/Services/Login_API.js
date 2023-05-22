import axios from 'axios';

export function Login_Sesion(user, password) {
  const DataUser = {
    User: user,
    Password: password,
  };

  axios.post('http://localhost:3000/login', DataUser)
  .then(({data})=>{
    console.log(data);
  }).catch(({err})=>{
    console.log(err);
  })
}
