import React from 'react';
import Image from 'next/image';

function Story() {
  return (
    <div className="story">
      <div className="right">
        <Image src="/img/back.jpg" width={200} height={200} />
        <Image src="/img/story-1.jpeg" width={200} height={200} />
        <Image src="/img/story-2.jpeg" width={200} height={200} />
      </div>
      <div className="left"></div>
    </div>
  );
}

export default Story;
