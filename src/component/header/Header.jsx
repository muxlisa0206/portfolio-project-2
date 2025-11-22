import React from 'react'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className='fixed z-10 w-full top-0 left-0 bg-white shadow-[0px_4px_32px_0px_#00103D29]'>
      <div className='container mx-auto px-[100px] py-[15px] flex items-center gap-[50px] 2xl:justify-between'>
        <a href="#"><img src={logo} alt="" /></a>
        <ul className='hidden lg:flex items-center gap-[10px] xl:gap-[18px] 2xl:gap-[30px]'>
            <li className='font-[500] lg:text-[12px] xl:text-[18px] hover:text-[#EF7C00] duration-300'>Продукция</li>
            <li className='font-[500] lg:text-[12px] xl:text-[18px] hover:text-[#EF7C00] duration-300'>Сертификаты</li>
            <li className='font-[500] lg:text-[12px] xl:text-[18px] hover:text-[#EF7C00] duration-300'>Наша команда</li>
            <li className='font-[500] lg:text-[12px] xl:text-[18px] hover:text-[#EF7C00] duration-300'>О нас</li>
            <li className='font-[500] lg:text-[12px] xl:text-[18px] hover:text-[#EF7C00] duration-300'>Новости</li>
            <li className='font-[500] lg:text-[12px] xl:text-[18px] hover:text-[#EF7C00] duration-300'>Вакансии</li>
            <li className='font-[500] lg:text-[12px] xl:text-[18px] hover:text-[#EF7C00] duration-300'>Контакты</li>
        </ul>
        <div className='flex gap-3'>
            <p>RU</p>
            |
            <p>UZ</p>
        </div>
        </div>  
    </header>
  )
}

export default Header