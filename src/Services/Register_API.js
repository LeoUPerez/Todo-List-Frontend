import axios from "axios"

export function Register_Sesion(user, password, email) {
    const DataUser = {
        User: user,
        Password: password,
        Email: email
    }

    axios.post("http://localhost:3000/register",DataUser)
    .then(({data})=>{
        console.log(data);
    }).catch(({err})=>{
        console.log(err);
    })
};