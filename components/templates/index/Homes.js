import React from 'react';
import db from './../../../data/db.json';
import Image from 'next/image';
function Homes() {
  return (
    <div>
      {db.map((home) => (
        <div className="home">
          <Image />
        </div>
      ))}
    </div>
  );
}

export default Homes;
