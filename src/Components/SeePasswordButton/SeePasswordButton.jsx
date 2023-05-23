import React, { useRef } from 'react'
import { Seepassword } from './SeePassword';

const SeePasswordButton = ({Input}) => {
  
  const PasswordBtn = useRef();

  return (
    <i onClick={()=>{Seepassword(Input, PasswordBtn)}} ref={PasswordBtn} className="fa-solid fa-eye-slash text-black text-xl absolute right-2 cursor-pointer"></i>
  )
}

export default SeePasswordButton;