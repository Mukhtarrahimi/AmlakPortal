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
    <div className="header">
      <div className="navbar">
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
          className={`fixed top-0 right-24 w-screen h-screen bg-gray-900 bg-opacity-70 backdrop-blur-sm flex flex-col justify-center items-center gap-6 transition-all duration-500 ${
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
      </div>
      <div className="w-full h-96 bg-gray-900 flex">
        <div className="right pr-36 bg-amber-200 w-[70%]">
          <div className="logo flex items-center justify-center gap-2 flex-row-reverse mt-10">
            <Image
              src="/img/favicon.png"
              width={600}
              height={600}
              className="w-16"
            />
            <p className="text-yellow-500 uppercase">Rahimi</p>
          </div>
          <div className="title">
            <p>
              خانه خودتان:
              <br />
              <b> با خرید خانه نهایت آزادی را احساس کنید</b>
            </p>
          </div>
          <button>
            <Link href="/">املاک ما را مشاهده کنید</Link>
          </button>
          <div>
            <p>دیده میشود در</p>
            <div>
              <Image src="/img/logo-bbc.png" width={50} height={50} />
              <Image src="/img/logo-bi.png" width={50} height={50} />
              <Image src="/img/logo-forbes.png" width={50} height={50} />
              <Image src="/img/logo-techcrunch.png" width={50} height={50} />
            </div>
          </div>
        </div>
        <div className="left bg-blue-700 w-[30%]"></div>
      </div>
    </div>
  );
}

export default Header;
