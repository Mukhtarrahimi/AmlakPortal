import React from 'react';
import db from './../../../data/db.json';
import Image from 'next/image';
import Link from 'next/link';
function Homes() {
  return (
    <div>
      {db.homes.map((home) => (
        <div className="home">
          <Image src={home.img} width={400} height={400} />
          <h2>{home.title}</h2>
          <div>
            <p>{home.meterage}میتراژ</p>
            <p>{home.roomCount}تعداد اطاق ها</p>
          </div>
          <div>
            <p>قیمت {home.prce}</p>
          </div>
          <button>
            <Link href={`/`}></Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Homes;
