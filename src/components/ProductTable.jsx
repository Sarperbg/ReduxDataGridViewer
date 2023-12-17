import React, { useEffect, useState } from 'react';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const ProductTable = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState({ link: 'asc', socialMedia: 'asc' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3003/users');
      setData(response.data);
    } catch (error) {
      console.error('API isteği başarısız:', error);
    }
  };

  const handleSort = (field) => {
    const sortedData = [...data].sort((a, b) => {
      const fieldA = (a && a[field] || '').toString();
      const fieldB = (b && b[field] || '').toString();

      return sortOrder[field] === 'asc' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
    });

    setData(sortedData);

    // Sıralama durumunu güncelle
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      [field]: prevSortOrder[field] === 'asc' ? 'desc' : 'asc',
    }));
  };

  const sortingIcon = (field) => (
    <button className="focus:outline-none" onClick={() => handleSort(field)}>
      <FontAwesomeIcon
        icon={sortOrder[field] === 'asc' ? faArrowUp : faArrowDown}
        className={`text-${sortOrder[field] === 'asc' ? '[#744BFC]' : 'gray-500'} text-2xl`}
      />
    </button>
  );

  return (
    <div className="flex w-[90%] mx-auto border-[#EAEAEA] p-2 overflow-hidden">
      <table className="border border-gray-300 w-full">
        <thead>
          <tr className="bg-white">
            <th className="py-6 px-10 border-b text-left w-1/4">
              <div className="flex items-center justify-between">
                <div>Sosyal Medya Linki</div>
                {sortingIcon('link')}
              </div>
            </th>
            <th className="py-6 px-10 border-b text-left w-1/4">
              <div className="flex items-center justify-between">
                <div>Sosyal Medya Adı</div>
                {sortingIcon('socialMedia')}
              </div>
            </th>
            <th className="py-6 px-10 border-b text-left w-2/4">
              Açıklama
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-[#EFF2FF]' : ''}>
              <td className="py-6 px-10 border-b">{item.link || ''}</td>
              <td className="py-6 px-10 border-b">{item.socialMedia || ''}</td>
              <td className="py-6 px-10 border-b">{item.desc || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
