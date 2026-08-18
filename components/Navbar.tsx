"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#08182f] w-full relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[100px]">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10 ">
            <Image
              src="/logo.png"
              alt="Exacto Logo"
              width={500}
              height={200}
              className="h-26 sm:h-20 md:h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 relative z-10">
            <Link href="#home" className="text-white font-medium relative group">
              <span className="text-white">Home</span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#c48931]"></span>
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white font-medium transition-colors">
              About Us
            </Link>
            <Link href="#services" className="text-gray-300 hover:text-white font-medium transition-colors">
              Services
            </Link>
            <Link href="#team" className="text-gray-300 hover:text-white font-medium transition-colors">
              Our Team
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-[#08182f] border-t border-gray-700 transition-all duration-300 z-40 ${isOpen ? 'top-[100px] opacity-100 visible' : 'top-[80px] opacity-0 invisible'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
          <Link href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-[#c48931] font-semibold">Home</Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">About Us</Link>
          <Link href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">Services</Link>
          <Link href="#team" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">Our Team</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </header>
  );
}