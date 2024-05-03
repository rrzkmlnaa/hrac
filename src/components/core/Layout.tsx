import React, { ReactNode } from 'react';

import Breadcrumb from '@/components/core/Breadcrumb';
import FloatingWhatsapp from '@/components/core/FloatingWhatsapp';
import Footer from '@/components/core/Footer';
import Navigation from '@/components/core/Navigation';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <FloatingWhatsapp />
      <Navigation />
      <Breadcrumb
        homeElement='Home'
        separator={<span> &gt; </span>}
        activeClasses='text-primary-500'
        containerClasses='container mx-auto w-full h-auto flex py-5' 
        listClasses='hover:underline mx-2'
        capitalizeLinks
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
