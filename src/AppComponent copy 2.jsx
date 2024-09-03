// AppComponent.jsx
import React, { useState } from 'react';

const AppComponent = () => {
  // Estado para controlar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Botón de hamburguesa */}
      <div id='hamburger' className='space-y-1 md:hidden cursor-pointer' onClick={toggleMenu}>
        <div className='w-6 h-0.5 bg-orange-500'></div>
        <div className='w-6 h-0.5 bg-orange-500'></div>
        <div className='w-6 h-0.5 bg-orange-500'></div>
      </div>

      {/* Menú desplegable */}
      <ul id='menu' className={`absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center bg-orange-600 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li><a href='#'>Homepage</a></li>
        <li><a href='#'>About me</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Works</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </div>
  );
};

export default AppComponent;