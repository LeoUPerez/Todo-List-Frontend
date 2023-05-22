import React from 'react'
import './scroll.css'

const Card_Info = ({data}) => {
  return (
    <div className='w-1/4 h-full' id='card_info'>
       {data}
    </div>
  )
}

export default Card_Info;