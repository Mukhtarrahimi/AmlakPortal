import React from 'react';
import Image from 'next/image';

function Home({ title, img, roomCount, meterage, price, code, desc }) {
  return (
    <div>
      <Image src={img} />
      <h1>{title}</h1>
      <div>
        <p>{roomCount}</p>
      </div>
      <div>
        <p>{meterage}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Home;
