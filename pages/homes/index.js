import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import db from './../../data/db.json';
import Home from '@/components/modules/Home';
function index() {
  // search
  const [search, setSearch] = useState('');
  useEffect(() => {
    const newHomes = db.homes.filter((home) =>
      home.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearch(newHomes);
  }, [search]);
  // sort
  const [sort, setSort] = useState('');
  const [homes, setHomes] = useState([...db.homes]);
  useEffect(() => {
    switch (sort) {
      case 'price': {
        const newHomes = [...homes].sort((a, b) => a.price - b.price);
        setHomes(newHomes);
        break;
      }
      case 'roomCount': {
        const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(newHomes);
        break;
      }
      case 'meterage': {
        const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
        setHomes(newHomes);
        break;
      }
      default: {
        setHomes([...db.homes]);
      }
    }
  }, [sort]);

  // paginate
  const [paginate, setPaginate] = useState(1);
  const paginateHandler = (event, page) => {
    event.preventDefault();
    const endIndex = 3 * page;
    const startIndex = endIndex - 3;
    const paginatedHomes = db.homes.slice(startIndex, endIndex);
    setPaginate(paginatedHomes);
  };

  return (
    <div className="w-full md:pr-24 md:pl-8">
      <div className="header flex justify-between px-4 pt-10 pb-30">
        <div className="fitler ">
          <select
            defaultValue={sort}
            onChange={(e) => setSort(e.target.value)}
            name="انتخاب کنید"
            id=""
            className="border px-2 py-1"
          >
            <option value="price">بر اساس قیمت </option>
            <option value="roomCount">بر اساس تعداد اطاق ها</option>
            <option value="meterage">بر اساس اندازه</option>
          </select>
        </div>
        <div className="search ">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="جستجتو..."
            className="border px-2 py-1"
          />
        </div>
      </div>
      <div className="w-full   grid md:grid-cols-3 gap-6 ">
        {db.homes.slice(0, 3).map((home) => (
          <Home key={home.id} {...home} />
        ))}
      </div>
      <div className="paginate flex items-center justify-center gap-4 pb-8 pt-2">
        {Array.from({ length: Math.ceil(db.homes.length / 3) }).map(
          (item, index) => (
            <li
              key={index + 1}
              onClick={(event) => paginateHandler(event, index + 1)}
              className="bg-yellow-500 list-none w-8 h-8 rounded-full flex items-center justify-center text-lg"
            >
              <a href="#">{index + 1}</a>
            </li>
          )
        )}
      </div>
    </div>
  );
}

export default index;
