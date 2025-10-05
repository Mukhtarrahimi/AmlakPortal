import React from 'react';
import Image from 'next/image';

function Story() {
  return (
    <div className="story">
      <div className="right">
        <Image src="/img/back.jpg" />
        <Image src="/img/story-1.jpeg" />
        <Image src="/img/story-2.jpeg" />
      </div>
      <div className="left"></div>
    </div>
  );
}

export default Story;
