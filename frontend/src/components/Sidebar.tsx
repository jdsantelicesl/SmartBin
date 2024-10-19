import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-[#08B651] shadow-lg w-64 z-50 rounded-r-3xl`}>
      <div className="p-5 text-white font-semibold">
        <button onClick={onClose} className="absolute top-8 left-10 text-3xl">
            <Image src="/assets/Close.png" alt="close" width={24} height={24}/>
        </button>
        <nav className="pt-16 text-xl">
          <ul className="flex flex-col items-center gap-y-3">
            <li className="hover:cursor-pointer hover:bg-[#006B20] hover:text-[#E4FA84] w-[100%] rounded-3xl p-3 py-4 text-center"><Link href="/" onClick={onClose}>Home</Link></li>
            <li className="hover:cursor-pointer hover:bg-[#006B20] hover:text-[#E4FA84] w-[100%] rounded-3xl p-3 py-4 text-center"><Link href="/request" onClick={onClose}>Request a Bin</Link></li>
            <li className="hover:cursor-pointer hover:bg-[#006B20] hover:text-[#E4FA84] w-[100%] rounded-3xl p-3 py-4 text-center"><Link href="/contact" onClick={onClose}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
