// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Pagination, Zoom } from 'swiper/modules';

import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import four from '../../assets/four.png';
import five from '../../assets/five.png';


export default function Sertifikat() {
  return (
    <>
       <div className='container mx-auto px-[20px] md:px-[100px] py-[20px]'>
        <h1 className='text-[32px] text-center'>Качество продукции подтверждают <span className='text-[#EF7C00]'>сертификаты</span></h1>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
       navigation={true}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='max-w-[300px] w-full'>
                <img src={one} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='max-w-[300px] w-full'>
                <img src={two} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='max-w-[300px] w-full'>
                <img src={three} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='max-w-[300px] w-full'>
                <img src={four} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='max-w-[300px] w-full'>
                <img src={five} alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}
