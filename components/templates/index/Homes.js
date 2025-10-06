import React from 'react';
import datas from './../../../data/db.json';
import Home from '@/components/modules/Home';

function Homes() {
  return (
    <div>
      {datas.map((data) => (
        <Home key={data.id} {...homes} />
      ))}
    </div>
  );
}

export default Homes;
