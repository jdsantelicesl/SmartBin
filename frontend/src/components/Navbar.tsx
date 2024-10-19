'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar from './Sidebar';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="px-10 pb-3 pt-8">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/assets/Hamburger.png" 
              alt="Menu" 
              className="mr-4 cursor-pointer" 
              width={24} 
              height={24}
              onClick={toggleSidebar}
            />
            {/* ... other navbar content ... */}
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
