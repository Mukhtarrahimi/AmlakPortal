import React, { useEffect, useState } from 'react';
import Home from '@/components/modules/Home';
import db from './../../data/db.json';

function Index() {
  const [homes, setHomes] = useState([...db.homes]);
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');

  // جستجو
  useEffect(() => {
    const filtered = db.homes.filter((home) =>
      home.title.toLowerCase().includes(search.toLowerCase())
    );
    setHomes(filtered);
  }, [search]);

  // مرتب‌سازی
  useEffect(() => {
    let sortedHomes = [...db.homes];
    switch (sort) {
      case 'price':
        sortedHomes.sort((a, b) => a.price - b.price);
        break;
      case 'roomCount':
        sortedHomes.sort((a, b) => a.roomCount - b.roomCount);
        break;
      case 'meterage':
        sortedHomes.sort((a, b) => a.meterage - b.meterage);
        break;
      default:
        break;
    }
    setHomes(sortedHomes);
  }, [sort]);

  // صفحه‌بندی
  const paginateHandler = (event, page) => {
    event.preventDefault();
    const endIndex = 3 * page;
    const startIndex = endIndex - 3;
    const newHomes = db.homes.slice(startIndex, endIndex);
    setHomes(newHomes);
  };

  return (
    <div className="w-full md:pr-24 md:pl-8">
      <div className="header flex justify-between px-4 pt-10 pb-30">
        <div className="filter">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border px-2 py-1"
          >
            <option value="">مرتب‌سازی...</option>
            <option value="price">بر اساس قیمت</option>
            <option value="roomCount">بر اساس تعداد اتاق‌ها</option>
            <option value="meterage">بر اساس متراژ</option>
          </select>
        </div>
        <div className="search">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="جستجو..."
            className="border px-2 py-1"
          />
        </div>
      </div>

      <div className="w-full grid md:grid-cols-3 gap-6">
        {homes.slice(0, 3).map((home) => (
          <Home key={home.id} {...home} />
        ))}
      </div>
      {/*  */}
      <div className="paginate flex items-center justify-center gap-4 pb-8 pt-2">
        {Array.from({ length: Math.ceil(db.homes.length / 3) }).map(
          (_, index) => (
            <li
              key={index + 1}
              onClick={(event) => paginateHandler(event, index + 1)}
              className="bg-yellow-500 list-none w-8 h-8 rounded-full flex items-center justify-center text-lg cursor-pointer"
            >
              <a href={index + 1}>{index + 1}</a>
            </li>
          )
        )}
      </div>
    </div>
  );
}

export default Index;
