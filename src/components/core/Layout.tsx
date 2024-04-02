import React, { ReactNode } from 'react';

import Footer from '@/components/core/Footer';
import Navigation from '@/components/core/Navigation';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
