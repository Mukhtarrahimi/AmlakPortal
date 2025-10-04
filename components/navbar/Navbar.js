import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const toggleBtn = () => {
    setIsClick(!isClick);
  };

  return (
    <div>
      {/* Navbar عمودی */}
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

      {/* منوی Overlay */}
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
  );
}

export default Navbar;
