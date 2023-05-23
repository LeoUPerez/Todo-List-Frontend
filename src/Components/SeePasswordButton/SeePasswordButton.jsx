import React from 'react'
import { Seepassword } from '../../Utilities/SeePassword';

const SeePassword = () => {
  return (
    <i onClick={Seepassword} className="fa-solid fa-eye text-black text-xl absolute right-2 cursor-pointer"></i>
  )
}

export default SeePassword