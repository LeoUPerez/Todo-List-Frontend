import React, { useRef, useState } from 'react'
import Card_Info from '../Card_Info/Card_Info';
import SeePasswordButton from '../SeePasswordButton/SeePasswordButton';
import { Register_Sesion } from '../../Services/Register_API';


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
        <div ref={Register} className='w-2/5 h-3/5 rounded-xl bg-blue-400 flex relative'>
            <Card_Info data="Register"/>
            <form action="" className='w-3/4 h-full flex justify-center items-center flex-col gap-4'>
            <input type="text" onChange={Onchange(setUser)} className='w-1/2 min-h-[6%] p-1 rounded-lg' placeholder='Username'/>
            <div className='w-1/2 min-h-[6%] flex gap-1 justify-center items-center relative'>
             <input type="password" onChange={Onchange(setPassword)} ref={InputPassword} className='w-full h-full p-1 rounded-lg' placeholder='Contraseña'/>
             <SeePasswordButton Input={InputPassword} />
            </div>
            <input type="text" onChange={Onchange(setEmail)} className='w-1/2 min-h-[6%] p-1 rounded-lg' placeholder='Correo'/>
            <button onClick={(e)=>{e.preventDefault(); Register_Sesion(User, Password, Email)}}>Registrarse</button>
                {/* Formulario register */}
            </form>
            <button className='absolute right-1 bottom-1' onClick={(e)=>{e.preventDefault(); Close()}}>Falso</button>
        </div>
    }
    </>
  )
}

export default Register;