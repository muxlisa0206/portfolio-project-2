import React from 'react'


const News = (props) => {
  return (
    <div className='max-w-[519px] w-full overflow-hidden'>
        <img className='w-full h-[250px]' src={props.img} alt="" />
        <div className='py-[15px] flex flex-col gap-[5px]'>
            <p className='text-[#919399] text-[13px]'>{props.data}</p>
            <p className='text-[16px] font-[600]'>{props.desc}</p>
        </div>
    </div>
  )
}

export default News