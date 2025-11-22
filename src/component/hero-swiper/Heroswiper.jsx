// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import herobg from "../../assets/herobg.jpg";
import herobg2 from '../../assets/herobg2.jpg';
import herobg3 from '../../assets/herobg3.jpg';

import './heroswiper.css';

function Heroswiper() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-[500px] sm:h-[600px] mt-[50px] sm:mt-[85px] xl:mt-[110px]"
            style={{ backgroundImage: `url(${herobg})` }}>
            <div className='container mx-auto px-[100px] py-[100px] flex flex-col gap-[15px] items-center sm:items-start justify-center'>
                <p className='text-[14px] sm:text-[18px] font-[500] text-[#2C2D2E]'>LEANGROUP - тубы и этикетки</p>
                <h1 className='font-[600] text-[#2C2D2E] text-[27px] sm:text-[37px]'>Ламинатные тубы</h1>
                <p className='max-w-[700px] w-full text-[15px] sm:text-[20px] font-[400] text-center sm:text-left line-clamp-4'>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                <button className='py-[10px] px-[23px] text-white bg-[#EF7C00] rounded-[4px]'>Каталог</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-cover bg-center h-500 sm:h-[600px] container mx-auto px-[100px] py-[30px] sm:mt-[85px] xl:mt-[110px]"
           style={{ backgroundImage: `url(${herobg2})` }}>
             <form className='max-w-[650px] w-full mt-[80px] flex flex-col gap-[10px]'>
                <div className='flex gap-[10px] items-center'>
                    <input className='py-[10px] rounded-[4px] px-[20px] w-full border-1 border-[#00103D1F]' type="text" placeholder='Ваше имя'/>
                    <input className='py-[10px] rounded-[4px] px-[20px] w-full border-1 border-[#00103D1F]' type="number" placeholder='+998995643241'/>
                </div>
                <input type="text" placeholder='Комментарий' className='w-full rounded-[4px] h-[100px] px-[20px] py-[10px] border-1 border-[#00103D1F]'/>
                <button className='w-full px-[20px] py-[10px] bg-[#EF7C00] rounded-[4px] text-white'>Получить информацию</button>
            </form>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-cover bg-center h-[600px] container mx-auto px-[100px] py-[30px] sm:mt-[85px] xl:mt-[110px]"
           style={{ backgroundImage: `url(${herobg3})` }}>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Heroswiper;
