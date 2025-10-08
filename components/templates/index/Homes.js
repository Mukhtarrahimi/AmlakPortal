import React from 'react';
import db from './../../../data/db.json';
import Home from '@/components/modules/Home';
function Homes() {
  return (
    <div className="homes w-full md:pr-24 md:pl-8  grid md:grid-cols-3 gap-6 ">
      {db.homes.slice(0.6).map((home) => (
        <Home key={home.id} {...home} />
      ))}
    </div>
  );
}

export default Homes;
