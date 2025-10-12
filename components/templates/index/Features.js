import React from 'react';
//  font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBarChart,
  faGlobe,
  faKey,
  faLock,
  faMapMarker,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

function Features() {
  return (
    <div className="features  w-full  p-8">
      <div className="feature grid grid-cols-1 md:grid-cols-3 md:flex-row  gap-y-10 md:p-10 md:pr-24 ">
        {[
          {
            icon: faGlobe,
            title: 'بهترین خانه های لوکس جهان',
            info: 'نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند',
          },
          {
            icon: faBarChart,
            title: 'همه خانه ها در مکان های برتر',
            info: 'نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند',
          },
          {
            icon: faKey,
            title: 'خانه جدید در یک هفته',
            info: 'نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند',
          },
          {
            icon: faLock,
            title: 'پرداخت های ایمن در بعدی',
            info: 'نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند',
          },
          {
            icon: faTrophy,
            title: 'فقط بهترین خواص',
            info: 'نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند',
          },
          {
            icon: faMapMarker,
            title: '1% مشاوران املاک برتر',
            info: 'نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند',
          },
        ].map((fea) => (
          <li
            key={fea.title}
            className="list-none flex items-start gap-2 md:gap-3 md:p-4"
          >
            <FontAwesomeIcon
              icon={fea.icon}
              className="text-3xl text-amber-600 md:text-5xl"
            />
            <div>
              <h2 className="font-semibold mb-2">{fea.title}</h2>
              <p>{fea.info}</p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Features;
