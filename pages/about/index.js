import React from 'react';

function about() {
  return (
    <section class="py-16 px-8 md:pr-26 ">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="order-1 md:order-2">
          <img
            src="/img/house-6.jpeg"
            alt="Real Estate Building"
            class="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <div class="order-2 md:order-1 space-y-6">
          <h2 class="text-4xl font-bold text-blue-700">درباره املاک رویال</h2>
          <p class="text-gray-700 leading-relaxed">
            شرکت املاک <span class="font-semibold text-blue-600">رویال</span> با
            بیش از یک دهه تجربه در زمینه خرید، فروش و اجاره ملک، با هدف ارائه
            خدمات حرفه‌ای و شفاف به مشتریان تأسیس شده است. ما باور داریم که خانه
            فقط یک ساختمان نیست؛ بلکه جایی است که زندگی در آن معنا پیدا می‌کند.
          </p>
          <p class="text-gray-700 leading-relaxed">
            تیم متخصص ما با دانش به‌روز بازار و استفاده از فناوری‌های مدرن،
            بهترین پیشنهادها را بر اساس نیاز و بودجه شما ارائه می‌دهد. از
            آپارتمان‌های لوکس گرفته تا زمین‌های مسکونی و تجاری، همه در پلتفرم ما
            با جزئیات کامل و دقیق در دسترس هستند.
          </p>

          <div class="grid grid-cols-3 gap-6 pt-4">
            <div class="text-center">
              <h3 class="text-3xl font-bold text-blue-700">10+</h3>
              <p class="text-sm text-gray-500">سال تجربه</p>
            </div>
            <div class="text-center">
              <h3 class="text-3xl font-bold text-blue-700">250+</h3>
              <p class="text-sm text-gray-500">پروژه انجام شده</p>
            </div>
            <div class="text-center">
              <h3 class="text-3xl font-bold text-blue-700">1000+</h3>
              <p class="text-sm text-gray-500">مشتری راضی</p>
            </div>
          </div>

          <div class="pt-6">
            <a
              href="#contact"
              class="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"
            >
              ارتباط با ما
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
