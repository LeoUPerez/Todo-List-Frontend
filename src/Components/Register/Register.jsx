import React, { useRef } from 'react'
import Card_Info from '../Card_Info/Card_Info';

const Register = ({Open, Close}) => {

const Register = useRef();

function ChangeStyleRegister(params) {
    
}

  return (
    <>
    {
        Open && 
        <div ref={Register} className='w-2/5 h-3/5 bg-slate-500 flex relative'>
            <Card_Info data="Register"/>
            <form action="" className='w-3/4 h-full bg-blue-400 flex justify-center items-center flex-col gap-4'>
            <input type="text" />
            <input type="text" />
            <input type="text" />
                {/* Formulario register */}
            </form>
            <button className='absolute right-1 bottom-1' onClick={(e)=>{e.preventDefault(); Close()}}>Falso</button>
        </div>
    }
    </>
  )
}

export default Register;