import React from 'react'

export const Kamanda = (props) => {
  return (
    <div className='max-w-[200px] w-full h-[335px]'>
        <img className='max-w-[240px] w-full h-[200px] rounded-[50%]' src={props.img} alt="" />
        <div className='pt-[10px] px-[10px] flex flex-col gap-[5px]'>
            <h4 className='text-[15px] text-[#2C2D2E]'>{props.name}</h4>
            <p className='text-[#919399] text-[13px]'>{props.proff}</p>
            <p className='text-[13px]'>{props.num}</p>
            <p className='text-[13px]'>{props.email}</p>
        </div>
    </div>
  )
}

export default Kamanda;