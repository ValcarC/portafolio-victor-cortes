import React, { useState } from 'react';
import './App.css';
import Photo from './assets/Victor-Cortes.png';
import AppComponent from './AppComponent.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='font-raleway'>
        {/* Section */}
        <div className='h-screen'>
          <div className="h-1/2 lg:h-screen bg-gradient-to-t from-orange-200 to-red-500">
            {/* navbar */}
            <nav className='w-full fixed top-0 bg-white'>
              <div className='container mx-auto py-5 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <img className='w-8' src="../public/logoVictor.png" alt="" />
                  <span className='text-xl font-medium text-orange-500'>Victor Cortés.</span>
                </div>
                <ul className='hidden md:flex space-x-10 text-gray-700 font-bold text-sm uppercase'>
                  <li className='hover:text-gray-500'>
                    <a href='#'>Homepage</a>
                  </li>
                  <li className='hover:text-gray-500'>
                    <a href='#'>About me</a>
                  </li>
                  <li className='hover:text-gray-500'>
                    <a href='#'>Services</a>
                  </li>
                  <li className='hover:text-gray-500'>
                    <a href='#'>Works</a>
                  </li>
                  <li className='hover:text-gray-500'>
                    <a href='#'>Contact</a>
                  </li>
                </ul>
                <img src="../public/moonVictor.png" className='hidden md:block w-8 cursor-pointer' alt="" />
                <div onClick={toggleMenu} className='space-y-1 md:hidden cursor-pointer z-20'>
                  <div className={`w-6 h-0.5 ${isMenuOpen ? 'bg-white' : 'bg-orange-400'}`}></div>
                  <div className={`w-6 h-0.5 ${isMenuOpen ? 'bg-white' : 'bg-orange-400'}`}></div>
                  <div className={`w-6 h-0.5 ${isMenuOpen ? 'bg-white' : 'bg-orange-400'}`}></div>
                </div>
                <ul className={`bg-orange-600 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center ${isMenuOpen ? '' : 'hidden'}`}>
                  <li>
                    <a href='#'>Homepage</a>
                  </li>
                  <li>
                    <a href='#'>About me</a>
                  </li>
                  <li>
                    <a href='#'>Services</a>
                  </li>
                  <li>
                    <a href='#'>Works</a>
                  </li>
                  <li>
                    <a href='#'>Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Intro Content */}
            <div></div>   
          </div>
          {/* <AppComponent /> */}
        </div>
      </div>
    </>
  );
}

export default App;