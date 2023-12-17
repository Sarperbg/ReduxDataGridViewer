import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableHeader from '../components/TableHeader';
import ProductTable from '../components/ProductTable';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Button from '../components/Button';
import { modalFunc } from '../redux/modalSlice';
import { toast } from 'react-toastify';
import Pagination from '../components/Pagination';
import { updateDataFunc } from '../redux/dataSlice';
import { fetchData, postData } from '../api/api';

const HomePage = () => {
  const [formData, setFormData] = useState({ link: '', socialMedia: '', desc: '' });
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const apiData = await fetchData();
      dispatch(updateDataFunc(apiData));
    } catch (error) {
      console.error('API isteği başarısız:', error);
    }
  };

  const handlePostRequest = async () => {
    if (!formData.link || !formData.socialMedia || !formData.desc) {
      toast.error('Formu eksiksiz doldurun.');
      return;
    }

    try {
      await postData(formData);
      toast.success('Post isteği başarıyla tamamlandı');

      setFormData({ link: '', socialMedia: '', desc: '' });

      fetchDataFromApi();

      dispatch(modalFunc());
    } catch (error) {
      toast.error('Post isteği başarısız oldu');
      console.error('POST isteği başarısız:', error);
    }
  };

  const handleChange = (e, field) => {
    setFormData((prevData) => ({ ...prevData, [field]: e.target.value }));
  };

  const contentModal = (
    <div className='flex flex-col'>
      <div className='flex flex-col mt-6'>
        <span className='font-medium text-md text-[#06163A] ml-2 mb-1'>Sosyal Medya Linki</span>
        <Input type='text' name='link' value={formData.link} onChange={(e) => handleChange(e, 'link')} />
      </div>
      <div className='flex flex-col mt-4'>
        <span className='font-medium text-md text-[#06163A] ml-2 mb-1'>Sosyal Medya Adı</span>
        <Input type='text' name='socialMedia' value={formData.socialMedia} onChange={(e) => handleChange(e, 'socialMedia')} />
      </div>
      <div className='flex flex-col mt-4'>
        <span className='font-medium text-md text-[#06163A] ml-2 mb-1'>Açıklama</span>
        <Input type='text' name='desc' value={formData.desc} onChange={(e) => handleChange(e, 'desc')} />
      </div>
      <div className='flex justify-end gap-4 mt-10'>
      <Button btnText='Vazgeç' 
      className='bg-[#F5F7FF] text-[#744BFC] rounded-[34px] p-4 font-medium font-sans  cursor-pointer hover:scale-95'
       onClick={() => dispatch(modalFunc())} />
        <Button 
        btnText='Kaydet'
        className='bg-[#744BFC] text-[#FFFFFF] rounded-[34px] p-4 font-medium font-sans  cursor-pointer hover:scale-95'
        onClick={handlePostRequest} />
      </div>
    </div>
  );

  return (
    <div className='flex-table w-[95%] h-full mx-auto'>
      <TableHeader />
      <ProductTable data={data} />
      {modal && <Modal contentModal={contentModal} title='Hesap Ekle' />}
      <Pagination data={formData} />
    </div>
  );
};

export default HomePage;
