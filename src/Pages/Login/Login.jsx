import React, { useEffect, useState } from 'react'
import Register from '../../Components/Register/Register';
import Card_Info from '../../Components/Card_Info/Card_Info';
import { Login_Sesion } from '../../Services/Login_API';

const Login = () => {

  //! UseState
  const [OpenRegister, setOpenRegister] = useState(false);
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");


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
    <div className="w-full h-screen bg-slate-300 flex justify-center items-center gap-5">
    {
     !OpenRegister &&
     <div className="w-2/5 h-3/5 rounded-xl bg-blue-400 relative flex">
        <Card_Info data="Login"/>
        <form className='w-3/4 h-full border-2 border-black flex justify-center items-center flex-col gap-4'>
          <input type="text" onChange={Onchange(setUser)} value={User} className='w-1/2 min-h-[6%] p-2 rounded-lg'/>
          <input type="text" onChange={Onchange(setPassword)} value={Password} className='w-1/2 min-h-[6%] p-2 rounded-lg'/>
          <button onClick={(e)=>{e.preventDefault(); Login_Sesion(User, Password)}}>Iniciar sesion</button>
          {/* Formulario Login */}
        </form>
        <button onClick={(e)=>{e.preventDefault(); OpenRegis()}} className='absolute right-1 bottom-1'>true</button>
     </div>                    
    }
      <Register Open={OpenRegister} Close={CloseRegis} />
    </div>
  );
}

export default Login;