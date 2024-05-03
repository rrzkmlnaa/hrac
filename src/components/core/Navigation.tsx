"use client"

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react';
import { GrLanguage, GrSearch } from "react-icons/gr";

import NextImage from '@/components/NextImage';

import { navigations } from '@/constant/navigations';

interface NavigationItem {
  name: string;
  path: string;
  children?: NavigationItem[]; // Optional children array of the same type
}

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [activeDoubleDropdown, setActiveDoubleDropdown] = useState('');
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
  };

  const isDropdownOpen = (dropdown: string) => {
    return activeDropdown === dropdown;
  };

  const toggleDoubleDropdown = (dropdown: string) => {
    setActiveDoubleDropdown(activeDoubleDropdown === dropdown ? '' : dropdown);
  };

  const isDoubleDropdownOpen = (dropdown: string) => {
    return activeDoubleDropdown === dropdown;
  };

  const closeAllDropdowns = () => {
    setActiveDropdown('');
    setActiveDoubleDropdown('');
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);


  return (
    <nav className={`bg-white border-2 border-gray-200 py-2 ${scroll ? 'sticky-navbar shadow-sm z-50' : ''}`} onMouseLeave={closeAllDropdowns}>
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-3 xl:px-0">
        <div className='flex items-center gap-5'>
          <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-expanded={isMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <Link href="/" className="flex items-center">
            <NextImage
              useSkeleton
              className='w-32 md:w-40'
              src='/images/appLogo.webp'
              width='180'
              height='180'
              alt='Icon'
            />
          </Link>
          <div ref={drawerRef} className={`w-full md:block md:w-auto md:static fixed z-10 inset-0 top-[73px] transform ease-in-out transition-all ${isMenuOpen ? ' translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              {navigations.map((navigation, idx) => {
                if (navigation?.children) {
                  return (
                    <li key={idx}>
                      <button onMouseEnter={() => toggleDropdown(navigation.name)} className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-blue-800 md:hover:text-blue-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto">
                        {navigation.name}
                        <svg className={`w-2.5 h-2.5 ml-2.5 ${isDropdownOpen(navigation.name) ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      <div className={`md:border-t-4 md:border-primary-500 z-10 pl-4 md:pl-0 md:absolute md:bg-white md:divide-y md:divide-gray-100 md:rounded-b-lg md:shadow w-full md:w-44 ${isDropdownOpen(navigation.name) ? '' : 'hidden'} font-normal `} onMouseLeave={() => toggleDropdown(navigation.name)}>
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                          {navigation.children?.map((child: NavigationItem, idx) => {
                            if (child.children) {
                              return (
                                <li key={idx}>
                                  <button onMouseEnter={() => toggleDoubleDropdown(child.name)} type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                                    {child.name}
                                    <svg className={`w-2.5 h-2.5 ml-2.5 ${isDoubleDropdownOpen(child.name) ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                  </button>
                                  <div className={`md:border-t-4 md:border-primary-500 z-10 static md:absolute ${isDoubleDropdownOpen(child.name) ? '' : 'hidden'} pl-4 md:pl-0 md:bg-white md:divide-y md:divide-gray-100 md:rounded-b-lg md:shadow w-full md:w-44 md:transform md:translate-x-44 md:translate-y-[-2.7rem]`}>
                                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="doubleDropdownButton">
                                      {child.children.map((child, idx) => (
                                        <li key={idx}>
                                          <a href={child?.path} className="block px-4 py-2 hover:bg-gray-100">{child.name}</a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </li>
                              );
                            }
                            return (
                              <li key={idx}>
                                <Link href={child?.path} className="block px-4 py-2 hover:bg-gray-100">{child.name}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  )
                }
                return (
                  <li key={idx}>
                    <Link href={navigation?.path} className="block py-2 pl-3 pr-4 md:p-0 text-blue-800 md:hover:text-blue-900">{navigation.name}</Link>
                  </li>
                )

              })}

            </ul>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <GrLanguage className='text-2xl cursor-pointer' />
          <GrSearch className='text-2xl cursor-pointer' />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
