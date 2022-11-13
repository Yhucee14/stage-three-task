import React from 'react';
import Header from './Header/Header'
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Cards from './Cards/Cards';

const Container = () => {
  return (
    <div className='concon'>
        <Header />
        <Body />
        <Footer />
        <Cards />

    </div>
  )
}

export default Container