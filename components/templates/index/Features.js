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
    <div className="features">
      <div className="feature">
        {[
          {
            icon: 'faGlobe',
            title: 'بهترین خانه های لوکس جهان',
            info: '',
          },
          {
            icon: 'faMapMarker',
            title: 'همه خانه ها در مکان های برتر',
            info: '',
          },
          {
            icon: 'faKey',
            title: 'خانه جدید در یک هفته',
            info: '',
          },
          {
            icon: 'faLock',
            title: 'پرداخت های ایمن در بعدی',
            info: '',
          },
          {
            icon: 'faTrophy',
            title: 'فقط بهترین خواص',
            info: '',
          },
          {
            icon: 'faMapMarker',
            title: '1% مشاوران املاک برتر',
            info: '',
          },
        ].map((fea) => (
          <li key={fea.title}>
            <FontAwesomeIcon icon={fea.icon} />
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
