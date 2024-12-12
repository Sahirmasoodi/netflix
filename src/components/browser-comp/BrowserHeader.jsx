import React from 'react';
import { AVATAR_IMG, LOGO_URL, LOGOUT } from '../../services/urlsservice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearch } from '../../utils/store/gptSlice';


const BrowserHeader = () => {
  const button = useSelector((state) => state.gpt.gptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogout() {
    navigate("/");
  }

  function handleGpt() {
    dispatch(toggleGptSearch());
  }
  
  return (
    <header className="bg-gradient-to-b from-black text-white fixed w-full z-50">
      <div className="flex items-center justify-between p-4">
      <img src={LOGO_URL} className='w-32 h-12'/>

        <div className="flex items-center space-x-3">
        <button
          onClick={handleGpt}
          className="bg-transparent border border-white text-white font-semibold py-1 px-4 rounded-md hover:bg-white hover:text-black transition duration-300">
         {
          button ? "Home" : "Search"
         }
        </button>
          <div className="relative">
            <img
              src={AVATAR_IMG}
              className="min-w-8 h-8 hover:ring-2 hover:ring-red-600"
            />
          </div>
           <button onClick={handleLogout}>
            <img src={LOGOUT} className='min-w-8 h-8 rounded-full'/>
           </button>
        </div>
      </div>
    </header>
  );
};

export default BrowserHeader;


