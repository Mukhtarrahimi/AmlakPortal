import React from 'react';
import Link from 'next/link';

function Home({ img, title, price, roomCount }) {
  return (
    <div className="">
      <div className="home relative overflow-hidden mx-4 my-6 bg-gray-50 rounded-lg">
        <img src={img} className="w-full object-fill" />
        <div className="px-6 pt-2 pb-6">
          <h2 className="bg-gray-50 text-md opacity-75 text-center absolute top-2 px-2 py-1 rounded-xl">
            {title}
          </h2>
          <div className="flex justify-between">
            <p>تعداد اطاق ها {roomCount}</p>
            <p>قیمت {price}</p>
          </div>
          <div></div>
          <button className="bg-gray-200 mt-4 px-6 py-2 rounded-2xl">
            <Link href={`/`}>جزئیات خانه</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
