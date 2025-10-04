import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div>
      <div className="navbar h-screen w-24  bg-yellow-500 flex items-start justify-center">
        <button className="mt-6 p-1 border-2 rounded-lg border-gray-900 ">
          <FontAwesomeIcon icon={faBars} className="text-gray-900 text-xl" />
        </button>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-10 bg-gray-900">
        <ul>
          <li className="bg-yellow-500 w-36 h-10 flex items-center justify-center hover:bg-yellow-600 duration-500 rounded-lg text-white">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="bg-yellow-500 w-36 h-10 flex items-center justify-center hover:bg-yellow-600 duration-500 rounded-lg text-white">
            <Link href="/">خانه ها</Link>
          </li>
          <li className="bg-yellow-500 w-36 h-10 flex items-center justify-center hover:bg-yellow-600 duration-500 rounded-lg text-white">
            <Link href="/">درباره ما</Link>
          </li>
          <li className="bg-yellow-500 w-36 h-10 flex items-center justify-center hover:bg-yellow-600 duration-500 rounded-lg text-white">
            <Link href="/">تماس با ما</Link>
          </li>
          <li className="bg-yellow-500 w-36 h-10 flex items-center justify-center hover:bg-yellow-600 duration-500 rounded-lg text-white">
            <Link href="/">گالری</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
