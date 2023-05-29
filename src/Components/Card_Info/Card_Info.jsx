import React from 'react'
import './scroll.css'

const Card_Info = ({data}) => {
  return (
    <div className='w-1/4 h-full p-3 border-r-2' id='card_info'>
      <strong>{data}</strong>
      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magnam fuga molestias consequatur numquam saepe libero voluptates, dicta fugiat voluptatibus assumenda quam eius ut, dignissimos explicabo possimus consequuntur est aspernatur!</p>
    </div>
  )
}

export default Card_Info;