import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer';
import Side from '../../Side';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Side />
      <Footer />
    </>
  );
}
