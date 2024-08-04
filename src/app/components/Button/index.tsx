import React from 'react'

export const Button = ({text} : {text:string}) => {
  return (
    <button className=' w-full h-10 bg-[#985ACE] text-[16px] text-white font-semibold rounded-lg py-1 px-2 transition-all ease-in-out duration-300  hover:translate-y-[-5px] hover:shadow-[0_5px_20px_0_rgb(185,42,221)]'>{text}</button>
  )
}
