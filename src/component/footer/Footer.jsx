import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] mt-[40px]">
      <div className="container mx-auto px-[20px] md:px-[100px] py-[30px]">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-8">

          <div className="col-span-1">
            <img src={logo} alt="logo" className="w-[140px]" />
          </div>

          <div>
            <h3 className="font-bold text-[20px] mb-3">Продукция</h3>
            <ul className="space-y-2 text-[16px]">
              <li>Ламинатные тубы</li>
              <li>Экструзионные тубы</li>
              <li>Другая упаковка</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[20px] mb-3">Компания</h3>
            <ul className="space-y-2 text-[16px]">
              <li>О нас</li>
              <li>Наша команда</li>
              <li>Сертификаты</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[20px] mb-3">Разделы</h3>
            <ul className="space-y-2 text-[16px]">
              <li>Контакты</li>
              <li>Новости</li>
              <li>Вакансии</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-[20px]">

            <div>
              <h4 className="text-[#EF7C00] font-bold">Беларусь</h4>
              <p className="text-sm">+375 (17) 270 53 77</p>
              <p className="text-sm">+375 (17) 270 53 78</p>

              <h4 className="text-[#EF7C00] font-bold mt-4">Москва</h4>
              <p className="text-sm">+7 (495) 280 73 44</p>
              <p className="text-sm">+7 (495) 280 73 44</p>
            </div>

            <div>
              <h4 className="text-[#EF7C00] font-bold">Европа</h4>
              <p className="text-sm">+48 73 1111 044</p>

              <h4 className="text-[#EF7C00] font-bold mt-4">Екатеринбург</h4>
              <p className="text-sm">+7 (343) 346 82 06</p>
            </div>

          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between mt-6 text-gray-500 text-sm border-t">

          <p>© 2022 Leangroup. All Rights Reserved.</p>
          <p>Разработка и продвижение сайтов SkyWeb.by</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
