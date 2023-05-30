import React, { useRef, useState } from 'react'
import Register from '../../Components/Register/Register';
import Card_Info from '../../Components/Card_Info/Card_Info';
import { Login_Sesion } from '../../Services/Login_API';
import SeePasswordButton from '../../Components/SeePasswordButton/SeePasswordButton'
import todo_image from '../../assets/Images/todo_.svg'
import './scroll.css'

const Login = () => {

  const [OpenRegister, setOpenRegister] = useState(false);
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const InputPassword = useRef();

  const Onchange = (setState) => (event) => {
    setState(event.target.value);
  }

  function OpenRegis() {
    setOpenRegister(true);
  }
  function CloseRegis() {
    setOpenRegister(false);
  }

  return (
    <div  className="w-full h-screen flex justify-center items-center gap-5 relative">
    {
     !OpenRegister &&
     <div id='container_login' className="w-2/5 h-3/5 rounded-xl absolute left-24 flex">
        {/* <Card_Info data="Login"/> //!Aquí hay un flex con la card info*/} 
        <form className='w-3/4 h-full flex border relative rounded-2xl justify-center items-center flex-col gap-4'>
        <span className='w-28 h-14 flex justify-center absolute top-1'>
          <img src={todo_image} className='h-24' alt="todo list" />
        </span>
        <h1 className='text-center text-6xl font-serif'>Bienvenidos</h1>
          <div className='w-full text-gray-400 flex justify-center items-center gap-1'>
            <div className='w-1/5 h-0.5 bg-gray-400'></div>
            <span className='uppercase'><strong>login with username</strong></span>
            <div className='w-1/5 h-0.5 bg-gray-400'></div>
          </div>
          <input onChange={Onchange(setUser)} type="text" name='Username' value={User} className='w-4/5 min-h-[6%] p-1 rounded-lg border' placeholder='Username'/>
          <div className='w-4/5 min-h-[6%] flex gap-1 justify-center items-center relative'>
           <input onChange={Onchange(setPassword)} ref={InputPassword} type="password" name='Password' value={Password} className='w-full h-full p-1 rounded-lg border' placeholder='Password'/>
           <SeePasswordButton Input={InputPassword} />
          </div>
          <button className='w-1/4 h-11 rounded-xl border transition-all duration-200 hover:bg-blue-600 hover:text-white' onClick={(e)=>{e.preventDefault(); Login_Sesion(User, Password)}}>Log in</button>
          <button onClick={(e)=>{e.preventDefault(); OpenRegis()}} className='absolute right-1 bottom-1 p-1 underline'>Register</button>
        </form>
     </div>                    
    }
      <Register Open={OpenRegister} Close={CloseRegis} />
      <div className='w-1/2 h-full bg-blue-400 absolute right-1 z-0'></div>
    </div>
  );
}

export default Login;