import React from 'react'

const Button = ({text}) => {
  return (
    <div className=" flex justify-center items-center  ">
      <button className='outline-none text-xl  btn bg-black text-white font-medium  px-4 py-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>{text}</button>
    </div>
  )
}

export default Button
