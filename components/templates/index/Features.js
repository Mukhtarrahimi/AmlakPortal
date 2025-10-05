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
    <div className="features bg-gray-400 w-full h-screen p-8">
      <div className="feature flex flex-col">
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
          <li key={fea.title} className="list-none flex justify-center">
            <FontAwesomeIcon icon={fea.icon} className="" />
            <div>
              <h2>{fea.title}</h2>
              <p>{fea.info}</p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Features;
