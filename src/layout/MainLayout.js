import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div class="mainBody">{ children }</div>
      <Footer />
    </>
  )
}

export default MainLayout