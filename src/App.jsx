import React from 'react'
import Header from './component/header/Header'
import Heroswiper from './component/hero-swiper/Heroswiper'
import Sertifikat from './component/sertifikat/sertifikat'
import Cardtab from './component/tab/Cardtab'
import herobg2 from './assets/herobg2.jpg';
import Kamanda from './component/kamanda/Kamanda'
import kamanda from './assets/kamanda.jpg'
import kamanda1 from './assets/kamanda1.jpg'
import kamanda2 from './assets/kamanda2.jpg'
import kamanda3 from './assets/kamanda3.jpg'
import kamanda4 from './assets/kamanda4.jpg'
import herobg3 from './assets/herobg3.jpg';
import news2 from './assets/news2.jpg';
import news3 from './assets/news3.jpg';
import News from './component/news/News'
import Footer from './component/footer/Footer'



const App = () => {
  return (
    <div>
        <Header/>
        <Heroswiper/>
        <div className='container mx-auto px-[20px] md:px-[100px] py-[10px] sm:py-[50px] flex flex-col gap-[20px]'>
            <h1 className='text-[32px] font-[600] text-center'>О компании <span className='text-[#EF7C00]'>LEANGROUP</span></h1>
            <div className='flex flex-col items-center gap-[10px] lg:flex-row justify-between gap-[30px]'>
            <iframe
                src="https://www.youtube.com/embed/m_umaRj-sfo"
                title="YouTube video player"
                className='rounded-md mx-[20px] max-w-[700px] w-full h-[200px] sm:h-[400px]'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <p className='w-full max-w-[600px] lg:max-w-[500px] h-[200px] 2xl:max-w-[630px] 2xl:h-[380px] text-[14px] 2xl:text-[16px] line-clamp-20'>Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.
                <br /><br /><br />
                <span>Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.</span>
                <br /><br /><br />
                <span className='hidden md:block'>С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.</span> </p>
            </div>
        </div>
        <Sertifikat/>
        <div className='container mx-auto px-[20px] md:px-[100px] py-[20px] flex flex-col gap-[10px]'>
            <h1 className='text-[32px] text-center'>Наша <span className='text-[#EF7C00]'>продукция</span></h1>
            <Cardtab/>
        </div>
        <div className="container mx-auto px-[20px] md:px-[100px] bg-cover bg-center pt-[50px] h-[500px] sm:h-[400px] w-full mt-[110px] shadow-[0px_4px_32px_0px_#00103D29]"
        style={{ backgroundImage: `url(${herobg2})` }}>
            <h1 className='text-[32px]'>Получить подробную <span className='text-[#EF7C00]'>информацию</span></h1>
            <p className='max-w-[400px] w-full text-[15px]'>Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>
            <form className='max-w-[650px] w-full mt-[30px] flex flex-col gap-[10px]'>
                <div className='flex gap-[10px] items-center'>
                    <input className='py-[10px] rounded-[4px] px-[20px] w-full border-1 border-[#00103D1F]' type="text" placeholder='Ваше имя'/>
                    <input className='py-[10px] rounded-[4px] px-[20px] w-full border-1 border-[#00103D1F]' type="number" placeholder='+998995643241'/>
                </div>
                <input type="text" placeholder='Комментарий' className='w-full rounded-[4px] h-[100px] px-[20px] py-[10px] border-1 border-[#00103D1F]'/>
                <button className='w-full px-[20px] py-[10px] bg-[#EF7C00] rounded-[4px] text-white'>Получить информацию</button>
            </form>
        </div>
        <div className='container mx-auto px-[20px] md:px-[100px] mt-[50px] flex flex-col gap-[20px]'>
            <h1 className='text-center text-[32px]'>Наша <span className='text-[#EF7C00]'>команда</span></h1>
            <div className='flex flex-col items-center gap-[10px] sm:grid grid-cols-3 xl:grid-cols-5 gap-[30px]'>
                <Kamanda img={kamanda} name='Войнич Дарья' proff='Заместитель директора по продажам' num='+375 (17) 270-53-77 (317)' email='+375 00 000 00 00@gmail.com'/>
                <Kamanda img={kamanda1} name='Мисько Екатерина' proff='Начальник отдела сопровождения' num='++375 (17) 270-53-77 (115) +375 29 112-73-48' email='k.melnichenko@leangroup.by'/>
                <Kamanda img={kamanda2} name='Дмитроченко Дмитрий' proff='Начальник отдела допечатной подготовки' num=' +375 29 360-32-26' email='dmitrochenko@leangroup.by'/>
                <Kamanda img={kamanda3} name='Антух Евгений' proff='Начальник отдела снабжения' num='+375 (17) 270-53-77 (148)' email='j.antuh@leangroup.by'/>
                <Kamanda img={kamanda4} name='Мисник Елена' proff='Специалист по работе с клиентами' num=' +375 29 329-34-03' email='e.misnik@leangroup.by'/>
            </div>
        </div>
        <div className='container mx-auto px-[20px] md:px-[100px] mt-[50px] '>
            <h1 className='text-center text-[32px]'>Новости</h1>
            <div className='flex flex-col gap-[10px] items-center sm:grid grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                <News img={herobg3} data='28.01.2022' desc='ЛеанГрупп" серебряный призер EcoVadis!'/>
                <News img={news2} data='21.01.2022' desc='ЛеанГрупп" серебряный призер EcoVadis!'/>
                <News img={news3} data='16.12.2022' desc='Туба, как вид упаковки'/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default App
