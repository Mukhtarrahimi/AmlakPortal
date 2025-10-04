import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isClick, setIsClick] = useState(false);
  const toggleBtn = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="header relative w-full">
      <div className="navbar h-screen w-24 bg-yellow-500 flex items-start justify-center fixed top-0 right-0 z-50">
        <button
          onClick={toggleBtn}
          className="mt-6 p-2 border-2 rounded-lg border-gray-900 hover:bg-yellow-600 transition"
        >
          <FontAwesomeIcon
            icon={isClick ? faTimes : faBars}
            className="text-gray-900 text-2xl"
          />
        </button>
      </div>

      <div
        className={`fixed top-0 right-24 w-screen h-screen bg-gray-900 z-30  flex flex-col justify-center items-center gap-6 transition-all duration-500 ${
          isClick ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-6">
          {['صفحه اصلی', 'خانه ها', 'درباره ما', 'تماس با ما', 'گالری'].map(
            (item) => (
              <li
                key={item}
                className="bg-yellow-500 w-40 h-12 flex items-center justify-center hover:bg-yellow-600 duration-300 rounded-lg text-white text-lg font-heading shadow-lg"
              >
                <Link href="/">{item}</Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* بخش اصلی Header */}
      <div className="w-full h-[26rem] flex relative">
        <div className="right pr-40 w-[70%] relative flex flex-col justify-center">
          <div className="absolute inset-0 bg-[url('/img/back.jpg')] bg-cover bg-center"></div>
          <div className="relative z-10 flex flex-col items-start p-10 gap-6">
            {/* لوگو */}
            <div className="logo flex flex-row-reverse  items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image
                  src="/img/favicon.png"
                  alt="logo"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-yellow-500 text-3xl uppercase font-bold">
                Rahimi
              </p>
            </div>

            {/* عنوان */}
            <div className="title text-white">
              <p className="text-2xl">خانه خودتان:</p>
              <p className="text-3xl font-semibold mt-2">
                با خرید خانه نهایت آزادی را احساس کنید
              </p>
            </div>

            {/* دکمه */}
            <Link
              href="/"
              className="px-5 py-3 bg-yellow-500 hover:bg-yellow-600 duration-500 rounded-lg inline-block"
            >
              املاک ما را مشاهده کنید
            </Link>

            {/* لوگوهای دیده‌شده در */}
            <div>
              <p className="text-white text-center text-xl mt-4">
                دیده می‌شود در
              </p>
              <div className="flex items-center gap-14 mt-3">
                <Image
                  src="/img/logo-bbc.png"
                  width={50}
                  height={50}
                  alt="BBC"
                  className="w-28"
                />
                <Image
                  src="/img/logo-bi.png"
                  width={50}
                  height={50}
                  alt="BI"
                  className="w-24"
                />
                <Image
                  src="/img/logo-forbes.png"
                  width={50}
                  height={50}
                  alt="Forbes"
                  className="w-30"
                />
                <Image
                  src="/img/logo-techcrunch.png"
                  width={50}
                  height={50}
                  alt="TechCrunch"
                  className="w-36"
                />
              </div>
            </div>
          </div>
        </div>

        {/* سمت چپ - سه مالک برتر */}
        <div className="left bg-gray-900 w-[30%] flex flex-col items-center justify-center p-6 gap-6">
          <p className="text-2xl text-yellow-500">سه مالک برتر</p>
          <ul className="flex flex-col gap-6 w-full">
            {[
              {
                name: 'مهدی ایلخانی نسب',
                sales: 869,
                img: '/img/realtor-1.jpeg',
              },
              { name: 'کوثر بهشتی', sales: 570, img: '/img/realtor-2.jpeg' },
              { name: 'عرشیا احسنی', sales: 130, img: '/img/realtor-3.jpeg' },
            ].map((realtor) => (
              <li key={realtor.name} className="flex items-center gap-4">
                <div className="w-16 h-16 relative">
                  <Image
                    src={realtor.img}
                    alt={realtor.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">
                    {realtor.name}
                  </p>
                  <p className="text-gray-200">{realtor.sales} فروش خانه</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
