import Input from './Input';
import Button from './Button';
import { AiOutlineSearch } from 'react-icons/ai';
import union from '../assets/Union.png';
import { useDispatch } from 'react-redux';
import { modalFunc } from "../redux/modalSlice"

const TableHeader = ({data,  className, ...props }) => {
  const dispatch = useDispatch();

  
  return (
    <div className="bg-gradient-to-t from-[#E8ECFF00] to-[#a9b3de]">
      <div className="flex justify-between items-center">
        <div className="w-[90%] flex justify-between items-center mx-auto mt-4 p-2">
          <div className="flex justify-center items-center">
            <div className='mt-3'>
              <Input
                type="text"
                placeholder="Search Objects..."
                name="name"
                id="name"
                className="mt-3"
              />
            </div>

            <button className="max-md:flex-wrap flex relative top-[6px] -left-12 w-[50px] h-[50px] bg-[#744BFC] rounded-tr-2xl rounded-br-2xl justify-center items-center">
              <AiOutlineSearch className="w-6 h-6 text-white" />
            </button>
            <button className="flex relative -left-8 top-2 w-[52px] h-[50px] bg-white rounded-[29px] justify-center items-center min-w-fit max-sm:hidden">
              <img src={union} alt="" />
            </button>
          </div>
          <div onClick={() => dispatch(modalFunc())}
            className="px-4 py-6 h-10 rounded-3xl bg-[#744BFC] text-white flex items-center justify-center mt-4">

            <Button
            className="p-4 text-xl cursor-pointer hover:scale-95"
              btnText="+ Yeni Bir Hesap Ekle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
