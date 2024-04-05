import React, { ReactNode } from 'react';

import FloatingWhatsapp from '@/components/core/FloatingWhatsapp';
import Footer from '@/components/core/Footer';
import Navigation from '@/components/core/Navigation';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <FloatingWhatsapp />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
