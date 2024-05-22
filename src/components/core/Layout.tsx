import React, { ReactNode } from 'react';

import Breadcrumb from '@/components/core/Breadcrumb';
import FloatingWhatsapp from '@/components/core/FloatingWhatsapp';
import Footer from '@/components/core/Footer';
import Navigation from '@/components/core/Navigation';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <FloatingWhatsapp />
      <Navigation />
      <Breadcrumb
        homeElement='Home'
        separator={<span> &gt; </span>}
        activeClasses='text-primary-500 capitalize'
        containerClasses='container mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl h-auto flex py-5' 
        listClasses='hover:underline mx-2'
        capitalizeLinks
      />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
