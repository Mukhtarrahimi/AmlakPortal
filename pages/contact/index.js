import React from 'react';

function Contact() {
  return (
    <div>
      <section class="py-16 px-6 md:px-26">
        <div class="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="bg-gradient-to-br from-amber-500 to-yellow-500 text-white p-10 flex flex-col justify-center">
              <h2 class="text-3xl font-bold mb-4">با ما در تماس باشید</h2>
              <p class="mb-6 text-blue-100">
                اگر سوالی دارید یا نیاز به پشتیبانی دارید، از طریق فرم روبه‌رو
                برای ما پیام بفرستید. پاسخ شما در سریع‌ترین زمان ممکن داده خواهد
                شد.
              </p>

              <div class="space-y-4">
                <p class="flex items-center space-x-3">
                  <span class="material-icons text-white">📍</span>
                  <span>کابل، افغانستان</span>
                </p>
                <p class="flex items-center space-x-3">
                  <span class="material-icons text-white">📞</span>
                  <span>+93 700 123 456</span>
                </p>
                <p class="flex items-center space-x-3">
                  <span class="material-icons text-white">✉️</span>
                  <span>info@example.com</span>
                </p>
              </div>
            </div>

            <div class="p-10">
              <form class="space-y-6">
                <div>
                  <label class="block text-sm font-medium mb-2">نام شما</label>
                  <input
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium mb-2">ایمیل</label>
                  <input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium mb-2">پیام شما</label>
                  <textarea
                    rows="4"
                    placeholder="پیام خود را بنویسید"
                    class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full bg-gradient-to-br from-amber-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-gradient-to-br from-amber-600 to-yellow-500 transition cursor-pointer"
                >
                  ارسال پیام
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
