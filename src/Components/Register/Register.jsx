import React, { useRef, useState } from 'react'
import Card_Info from '../Card_Info/Card_Info';
import SeePasswordButton from '../SeePasswordButton/SeePasswordButton';
import { Register_Sesion } from '../../Services/Register_API';
import './scroll.css'


const Register = ({Open, Close}) => {

const [User, setUser] = useState("");
const [Password, setPassword] = useState("");
const [Email, setEmail] = useState("");

const Register = useRef();
const InputPassword = useRef();

const Onchange = (setState) => (event) => {
  setState(event.target.value)
}

  return (
    <>
    {
        Open && 
        <div ref={Register} id='container_register' className='w-2/5 h-3/5 rounded-xl justify-center flex z-50 absolute left-24'>
            {/* <Card_Info data="Register"/> */}
            <form action="" className='w-3/4 h-full relative border rounded-2xl flex justify-center items-center flex-col gap-4'>
             <h1 className='text-center text-6xl font-serif'>Bienvenidos</h1>
            <input type="text" onChange={Onchange(setUser)} className='w-4/5 min-h-[6%] p-1 border rounded-lg' placeholder='Username'/>
            <div className='w-4/5 min-h-[6%] flex gap-1 justify-center items-center relative'>
             <input type="password" onChange={Onchange(setPassword)} ref={InputPassword} className='w-full h-full p-1 border rounded-lg' placeholder='Contraseña'/>
             <SeePasswordButton Input={InputPassword} />
            </div>
            <input type="text" onChange={Onchange(setEmail)} className='w-4/5 min-h-[6%] p-1 border rounded-lg' placeholder='Correo'/>
            <button className='w-1/4 h-11 rounded-xl border transition-all duration-200 hover:bg-blue-600 hover:text-white' onClick={(e)=>{e.preventDefault(); Register_Sesion(User, Password, Email)}}>Sign in</button>
                {/* Formulario register */}
            <button className='absolute right-1 bottom-1 p-1 underline' onClick={(e)=>{e.preventDefault(); Close()}}>Log In</button>
            </form>
        </div>
    }
    </>
  )
}

export default Register;