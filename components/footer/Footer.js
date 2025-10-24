import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-gray-900 p-4 text-white">
      <ul className="nav">
        <li className="nav__item">
          <a href="#" className="nav__link">
            خانه رویایی خود را پیدا کنید
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            درخواست پروپوزال
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            برنامه اجاره خانه ها
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            با ما تماس بگیرید
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            ملک خود را ارسال کنید
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            با ما کار کنید
          </a>
        </li>
      </ul>

      <p className="copyright">
        &copy; حقوق مادی معنوی این سایت برای
        <strong className="copyright__name">مهدی ایلخانی نسب</strong>
        محفوظ میباشد
      </p>
    </footer>
  );
}

export default Footer;
