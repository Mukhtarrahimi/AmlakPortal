import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Story() {
  return (
    <div className="story my-8 md:flex gap-10 items-center justify-center bg-gray-100">
      <div className="relative right w-full md:w-[60%]">
        <Image
          src="/img/back.jpg"
          width={200}
          height={200}
          className=" w-full "
        />
        <Image
          src="/img/story-1.jpeg"
          width={400}
          height={400}
          className="absolute w-64 md:w-96 top-16 md:top-24 right-20 md:right-48"
        />
        <Image
          src="/img/story-2.jpeg"
          width={250}
          height={250}
          className="absolute w-44 md:w-64 top-3 md:top-8 right-6 md:right-[33rem]"
        />
      </div>
      <div className="left w-full md:w-[40%] p-4">
        <p className="text-yellow-600">مشتریان خوشحال</p>
        <h2 className="text-yellow-700 text-3xl font-semibold pt-3 pb-2">
          ”بهترین تصمیم زندگی ما“
        </h2>
        <p>
          متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک
          طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این
          متن برای پرکردن
        </p>
        <button className="bg-yellow-500 px-3 py-2 md:px-6 md:py-3.5 font-semibold rounded-lg md:rounded-xl mt-3">
          <Link href="/" />
          خانه خود را پیدا کنید
        </button>
      </div>
    </div>
  );
}

export default Story;
