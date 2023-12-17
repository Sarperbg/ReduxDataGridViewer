import React from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { CiYoutube } from 'react-icons/ci';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const SosyalLink = ({ icon }) => (
  <div className="bg-[#744BFC] p-[6px] rounded-md">
    {icon}
  </div>
);
const Header = () => {
  return (
    <div className="flex items-center justify-between mx-auto text-white py-4 w-[90%]">
      <div className="px-8 py-4 min-w-fit">
        <img src={logo} alt="Logo" className="w-36 h-28" />
      </div>

      <div className="flex gap-20 text-black text-base cursor-pointer">
        <Link className='hover:bg-[#744BFC] hover:text-white p-2 rounded-lg transition-transform transform hover:scale-110 cursor-pointer' to="/hakkimizda">Hakkımızda</Link>
        <Link className='hover:bg-[#744BFC] hover:text-white p-2 rounded-lg transition-transform transform hover:scale-110 cursor-pointer' to="/page2">Jüri - Yarışma Yazılımı</Link>
        <Link className='hover:bg-[#744BFC] hover:text-white p-2 rounded-lg transition-transform transform hover:scale-110 cursor-pointer' to="/page3">Word Ninja</Link>
        <Link className='hover:bg-[#744BFC] hover:text-white p-2 rounded-lg transition-transform transform hover:scale-110 cursor-pointer' to="/page4">Word Pyramids</Link>
      </div>

      <div className="flex gap-4">
        <SosyalLink icon={<CiYoutube size={24} />} />
        <SosyalLink icon={<FaInstagram size={24} />} />
        <SosyalLink icon={<FaTwitter size={24} />} />
        <SosyalLink icon={<FaLinkedinIn size={24} />} />
      </div>
    </div>
  );
};


export default Header;
